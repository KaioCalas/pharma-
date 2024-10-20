import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/loginScreen';
import HomeScreen from './src/screens/homeScreen';
import RegisterScreen from './src/screens/registerScreen';
import TelaInicial from './src/screens/telaInicial';
import CadastrarScreen from './src/screens/CadastrarScreen'
import ConsultarScreen from './src/screens/ConsultarScreen';
import SuporteScreen from './src/screens/SuporteScreen';
import RelatoriosScreen from './src/screens/relatorioScreen';
import EditarScreen from './src/screens/EditarScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Cadastrar" component={CadastrarScreen} />
        <Stack.Screen name="Consultar" component={ConsultarScreen} />
        <Stack.Screen name="Suporte" component={SuporteScreen} />
        <Stack.Screen name="Relatorio" component={RelatoriosScreen} />
        <Stack.Screen name="Editar" component={EditarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

