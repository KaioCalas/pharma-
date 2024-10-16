import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet, Alert } from 'react-native';

function LoginScreen({ navigation }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [erros, setErros] = useState({});

  const validateForm = () => {
    let formErros = {};

    if (!name) formErros.name = 'O nome é obrigatório';

    if (!password) formErros.password = 'A senha é obrigatória';

    setErros(formErros);

    return Object.keys(formErros).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert('Sucesso', 'Formulário enviado com sucesso');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PHARMA+</Text>

      <Text style={styles.label}>Nome: </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={text => setName(text)}
      />
      {erros.name && <Text style={styles.error}>{erros.name}</Text>}

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={text => setPassword(text)} // Corrigido para setPassword
        secureTextEntry={true} // Oculta o texto da senha
      />
      {erros.password && <Text style={styles.error}>{erros.password}</Text>}

      <Text style={styles.label}>
        Não tem conta?{' '}
        <Text style={styles.hp_link} onPress={() => navigation.navigate('Register')}>
          Clique aqui!
        </Text>
      </Text>

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#048581',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Sombras no Android
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  hp_link: {
    color: 'e3e3e3',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
