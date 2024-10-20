import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert  } from 'react-native'
import * as Animatable from 'react-native-animatable'
import axios from 'axios';

const API_URL = 'https://pharmaplus-gules.vercel.app/api/auth/login'


function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(API_URL, {
        username,
        password
      });

      Alert.alert('Sucesso', 'Login Realizado com sucesso!')
      navigation.navigate('TelaInicial')
    } catch (error){
      console.error(error);
      Alert.alert('Erro', 'Falha ao relizar login.')
    }
  }

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput 
          style={styles.input}
          placeholder="Digite sua senha"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  containerForm: {
    backgroundColor: '#048581',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#fff',
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
  },
  registerText: {
    color: '#a1a1a1'
  }
})

export default LoginScreen