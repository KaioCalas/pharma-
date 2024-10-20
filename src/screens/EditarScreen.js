import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import axios from 'axios';

const API_URL = 'https://pharmaplus-gules.vercel.app/api/medicamentos'


function EditarScreen({ route, navigation }) {
  const { item } = route.params;
  const [nome, setNome] = useState(item.nome);
  const [dosagem, setDosagem] = useState(item.dosagem);
  const [fabricante, setFabricante] = useState(item.fabricante);
  const [dataValidade, setDataValidade] = useState(item.data_validade);
  const [quantidade, setQuantidade] = useState(item.quantidade);
  const [preco, setPreco] = useState(item.preco.toString()); // Convertendo para string

  const handleAtualizar = async () => {
    try {
      const formattedDate = new Date(dataValidade).toISOString().split('T')[0];

      const response = await axios.put(`${API_URL}/${item.id}`, {
        nome,
        dosagem,
        fabricante,
        data_validade: formattedDate,
        quantidade,
        preco: parseFloat(preco) // Convertendo para número
      });
      Alert.alert('Sucesso', response.data.message);
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Falha ao atualizar medicamento');
    }
  };

  const handleRemover = async () => {
    Alert.alert(
      'Remover Medicamento',
      'Tem certeza que deseja remover este medicamento?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: async () => {
            try {
              await axios.delete(`${API_URL}/${item.id}`);
              Alert.alert('Sucesso', 'Medicamento removido com sucesso');
              navigation.goBack();
            } catch (error) {
              console.error(error);
              Alert.alert('Erro', 'Falha ao remover medicamento');
            }
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Medicamento</Text>

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

      <TextInputMask
        style={styles.input}
        placeholder="Data de Validade (YYYY-MM-DD)"
        type={'datetime'}
        options={{
          format: 'YYYY-MM-DD'
        }}
        value={dataValidade}
        onChangeText={setDataValidade}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade em Estoque"
        value={quantidade.toString()} // Convertendo para string
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleAtualizar}>
        <Text style={styles.buttonText}>Atualizar Medicamento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleRemover}>
        <Text style={styles.buttonText}>Remover Medicamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#048581', // Cor do título
  },
  input: {
    borderWidth: 1,
    borderColor: '#048581', // Cor da borda
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9', // Cor de fundo dos inputs
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  button: {
    backgroundColor: '#048581', // Cor do botão
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#d32f2f', // Cor vermelha para o botão de remoção
  },
});

export default EditarScreen;
