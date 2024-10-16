import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/loginScreen';
import HomeScreen from './src/screens/homeScreen';
import RegisterScreen from './src/screens/registerScreen';
import TelaInicial from './src/screens/telaInicial';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="TelaInicial" component={TelaInicial} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

