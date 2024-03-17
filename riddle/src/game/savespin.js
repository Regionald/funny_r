import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing, StyleSheet } from 'react-native';

const SpinWheel = () => {
  const [rotateValue] = useState(new Animated.Value(0));
  const [result, setResult] = useState(null);
  const [revolution, setRevolution] = useState(0);
  const values = [60,120, 180, 240,300,360];
  const segmentAngle = 360 / values.length;

  const spin = () => {
    const randomValue = Math.floor(Math.random() * values.length);
    const toValue = 360 * 360 + randomValue * segmentAngle;
    setRevolution(toValue);
    setResult(null);
    console.log(randomValue);

    Animated.timing(rotateValue, {
      toValue,
      duration: 10000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      const segmentIndex = Math.floor(rotateValue._value % 360 / segmentAngle);
      setResult(values[segmentIndex]);
    });
  };

  const spinInterpolate = rotateValue.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const wheelStyle = {
    transform: [{ rotate: spinInterpolate }],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.wheel, wheelStyle]}>
        {values.map((value, index) => (
          <View key={index} style={[styles.segment, { transform: [{ rotate: `${index * segmentAngle}deg` }] }]}>
            <Text style={styles.text}>{value}</Text>
          </View>
        ))}
      </Animated.View>


      <TouchableOpacity style={styles.button} onPress={spin}>

        <Text style={styles.buttonText}>Spin</Text>

      </TouchableOpacity>
      {result && <Text style={styles.result}>Result: {result}</Text>}

      {result && <Text style={styles.result}>Results:{revolution}</Text>}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wheel: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
    overflow: 'hidden',
  },
  segment: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    transform: [{ translateY: -70 }],
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  result: {
    marginTop: 20,
    fontSize: 24,
  },
});

export default SpinWheel;
