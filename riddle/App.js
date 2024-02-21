import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Game from './src/game/game';
import Home from './src/game/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
const Stack = createStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    'Assassin': require('./assets/fonts/Assassin.ttf'),
    'Vector': require('./assets/fonts/Vector.ttf'),
    'Nine': require('./assets/fonts/Nine.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Game'
          component={Game}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='Home'
          component={Home}
          options={{ header: () => null }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
