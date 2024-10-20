import React from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';

import * as Animatable from 'react-native-animatable';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image 
          animation="flipInY"
          source={require('../../assets/logo_transparent.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Animatable.View 
        style={styles.containerForm}
        delay={600}
        animation="fadeInUp"
      >

          <Text style={styles.title}>Monitore, organize seus medicamentos de qualquer lugar!</Text>
          <Text style={styles.text}>Faça o login para começar</Text>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText} >Acessar</Text>
          </TouchableOpacity>
        </Animatable.View>
    </View>
  );
}

// Estilos básicos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#f7f8fa',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#048581',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: '#e1e1e1'
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30, // Adicionando espaçamento entre a imagem e os botões
  },
  button: {
    position: 'absolute',
    backgroundColor: '#38a69d',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;
