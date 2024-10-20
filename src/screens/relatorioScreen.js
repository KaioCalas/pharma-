import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const RelatorioScreen = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fabricanteSelecionado, setFabricanteSelecionado] = useState('todos');
  const [fabricantes, setFabricantes] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchMedicamentos = async () => {
        try {
          setLoading(true);
          const response = await axios.get('http://192.168.137.143:3000/api/medicamentos');
          setMedicamentos(response.data);
          
          const fabricantesUnicos = [...new Set(response.data.map(item => item.fabricante))];
          setFabricantes(fabricantesUnicos);
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

  // Filtragem de medicamentos com base no fabricante selecionado
  const medicamentosFiltrados = fabricanteSelecionado === "todos" 
    ? medicamentos 
    : medicamentos.filter(item => item.fabricante === fabricanteSelecionado);

  // Cálculos de totais com base nos medicamentos filtrados
  const totalMedicamentos = medicamentosFiltrados.length;
  const totalQuantidade = medicamentosFiltrados.reduce((total, item) => total + item.quantidade, 0);
  const totalPreco = medicamentosFiltrados.reduce((total, item) => total + item.preco * item.quantidade, 0);

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Nome: {item.nome}</Text>
      <Text style={styles.itemText}>Quantidade: {item.quantidade}</Text>
      <Text style={styles.itemText}>Preço: R$ {formatCurrency(item.preco)}</Text>
      <Text style={styles.itemText}>Total: R$ {formatCurrency(item.preco * item.quantidade)}</Text>
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#14b19d" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatórios de Medicamentos</Text>
      
      <Text style={styles.filterLabel}>Filtrar por Fabricante:</Text>
      <Picker
        selectedValue={fabricanteSelecionado}
        style={styles.picker}
        onValueChange={(itemValue) => setFabricanteSelecionado(itemValue)}
      >
        <Picker.Item label="Todos" value="todos" />
        {fabricantes.map((fabricante, index) => (
          <Picker.Item key={index} label={fabricante} value={fabricante} />
        ))}
      </Picker>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Total de Medicamentos: {totalMedicamentos}</Text>
        <Text style={styles.summaryText}>Quantidade Total em Estoque: {totalQuantidade}</Text>
        <Text style={styles.summaryText}>Custo Total em Estoque: R$ {formatCurrency(totalPreco)}</Text>
      </View>

      <FlatList
        data={medicamentosFiltrados}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#048581',
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 18,
    color: '#109a97',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  summaryContainer: {
    backgroundColor: '#14b19d',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 5,
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: '#109a97',
  },
});

export default RelatorioScreen;
