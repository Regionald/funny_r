import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Game from './src/game/game';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name='Game'
    //       component={Game}
    //       options={{ header: () => null }}
    //     />

    //   </Stack.Navigator>
    // </NavigationContainer>
    <Game></Game>
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
