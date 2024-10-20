import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios'

const API_URL = 'https://pharmaplus-gules.vercel.app/api/medicamentos'


function CadastrarScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [fabricante, setFabricante] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');

  const handleCadastrar = async () => {
    try {
        const response = await axios.post(API_URL, {
            nome,
            dosagem,
            fabricante,
            data_validade: dataValidade,
            quantidade,
            preco
        });
        Alert.alert('Sucesso', response.data.message);
    } catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Falha ao cadastrar medicamento');
    }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Medicamento</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Medicamento"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Dosagem"
        value={dosagem}
        onChangeText={setDosagem}
      />

      <TextInput
        style={styles.input}
        placeholder="Fabricante"
        value={fabricante}
        onChangeText={setFabricante}
      />

      <TextInput
        style={styles.input}
        placeholder="Data de Validade (YYYY-MM-DD)"
        value={dataValidade}
        onChangeText={setDataValidade}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade em Estoque"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder='Preço'
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
        />

      <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
        <Text style={styles.buttonText}>Cadastrar Medicamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#00796b',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default CadastrarScreen;
