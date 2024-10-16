import React, {useState} from 'react';
import { Text, TextInput, View, Button, StyleSheet} from 'react-native';


function RegisterScreen () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>PHARMA+</Text>

            <Text style={styles.label}>Nome: </Text>
            <TextInput 
                style={styles.input} 
                placeholder="Digite seu nome"
                value={name}
            />

            <Text style={styles.label}>E-mail: </Text>
            <TextInput 
                style={styles.input}
                placeholder="Digite seu Email"
                value={email}
            />

            <Text style={styles.label}>Senha: </Text>
            <TextInput 
                style={styles.input}
                placeholder="Digite sua senha"
                value={password}
            />

            <Button title="Cadastrar" />
        </View>
    )
}


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
      label: {
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
        color: 'blue',
        textDecorationLine: 'underline',
      },
    });

export default RegisterScreen;