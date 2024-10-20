import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import { format } from 'date-fns';

const API_URL = 'https://pharmaplus-gules.vercel.app/api/medicamentos'

function ConsultarScreen({ navigation }) {
  const [medicamentos, setMedicamentos] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const fetchMedicamentos = async () => {
        try {
          setLoading(true);
          const response = await axios.get(API_URL);
          setMedicamentos(response.data);
        } catch (error) {
          console.error('Erro ao buscar medicamentos:', error);
          Alert.alert('Erro', 'Falha ao buscar medicamentos');
        } finally {
          setLoading(false);
        }
      };

      fetchMedicamentos();
    }, [])
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('Editar', { item })}
      activeOpacity={0.7} // Efeito de pressão ao tocar no item
    >
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Nome: {item.nome}</Text>
        <Text style={styles.itemText}>Dosagem: {item.dosagem}</Text>
        <Text style={styles.itemText}>Fabricante: {item.fabricante}</Text>
        <Text style={styles.itemText}>Data de Validade: {format(new Date(item.data_validade), 'dd/MM/yyyy')}</Text>
        <Text style={styles.itemText}>Quantidade: {item.quantidade}</Text>
        <Text style={styles.itemText}>Preço: R$ {item.preco.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#14b19d" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultar Medicamentos</Text>
      <FlatList
        data={medicamentos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', // Cor de fundo atualizada
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#048581', // Cor do título
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 4,
  },
  itemText: {
    fontSize: 16,
    color: '#333', // Cor do texto dos itens
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF', // Fundo da tela de carregamento
  },
});

export default ConsultarScreen;
