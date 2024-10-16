import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PHARMA+</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Iniciar &gt;</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('TelaInicial')}
      >
        <Text style={styles.buttonText}>adm</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos básicos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f7f8fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff', // Cor de fundo do botão
    paddingVertical: 12, // Padding vertical
    paddingHorizontal: 20, // Padding horizontal
    borderRadius: 8, // Bordas arredondadas
    marginBottom: 10, // Espaçamento entre os botões
    alignItems: 'center', // Centralizar o texto
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;
