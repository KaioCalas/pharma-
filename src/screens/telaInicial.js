import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';

function TelaInicial({ navigation }) {
  const [loading, setLoading] = useState(false);

  const handleConsultar = () => {
    setLoading(true); // Ativa o loading
    Alert.alert("Carregando", "Aguarde enquanto estamos buscando os dados..."); // Mostra o Alert

    // Simula um atraso antes de navegar (ex: 2 segundos)
    setTimeout(() => {
      setLoading(false); // Desativa o loading
      navigation.navigate('Consultar'); // Navega para a tela de consulta
    }, 2000); // Tempo de espera em milissegundos
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image 
          animation="flipInY"
          delay={600}
          source={require('../../assets/logo_transparent.png')} 
          style={styles.image}
        />
      </View>
      
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#14b19d" />
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleConsultar}>
            <Text style={styles.buttonText}>Consultar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastrar')}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Suporte')}>
            <Text style={styles.buttonText}>Suporte</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Relatorio')}>
            <Text style={styles.buttonText}>Relatórios</Text>
          </TouchableOpacity>
        </View>
      )}
      
      <Text style={styles.footerText}>Todos os direitos reservados ADM - 146 © 2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', // Cor de fundo atualizada
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#048581', // Atualizando a cor do botão
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 30,
    margin: 10,
    flexBasis: '40%',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000', // Adicionando sombra para um efeito de profundidade
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    color: '#109a97', // Cor atualizada para o texto do rodapé
    fontSize: 12,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#14b19d', // Atualizando a cor da borda da imagem
  },
  loadingContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#048581', // Atualizando a cor do texto de carregamento
  },
});

export default TelaInicial;
