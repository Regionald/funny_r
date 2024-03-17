import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Game from './src/game/game';
import Home from './src/game/home';
import Spin from './src/game/spin'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import React, { useContext, useState, useEffect } from "react";
import { ExamDataProvider } from './src/game/data';



const Stack = createStackNavigator();

export default function App() {

  const [reggies, Setreggies] = useState(0)

  const [loaded] = useFonts({
    'Assassin': require('./assets/fonts/Assassin.ttf'),
    'Vector': require('./assets/fonts/Vector.ttf'),
    'Nine': require('./assets/fonts/Nine.ttf'),
    'Recoleta': require('./assets/fonts/Recoleta-Light.ttf'),
    'Astron': require('./assets/fonts/astron.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (


    <NavigationContainer>

      <ExamDataProvider>
        <Stack.Navigator>

          {/* <Stack.Screen
            name='SPIN'
            component={Spin}
            options={{ header: () => null }}
          /> */}

          <Stack.Screen
            name='Home'
            component={Home}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name='Game'
            component={Game}
            options={{ header: () => null }}
          />

        </Stack.Navigator>
      </ExamDataProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf39e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
