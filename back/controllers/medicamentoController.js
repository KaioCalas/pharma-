// controllers/medicamentoController.js
import Medicamento from '../models/medicamentoModel.js';

export const cadastrarMedicamento = async (req, res) => {
    const { nome, dosagem, fabricante, data_validade, quantidade, preco } = req.body;

    try {
        await Medicamento.create({ nome, dosagem, fabricante, data_validade, quantidade, preco });
        return res.status(201).json({ message: 'Medicamento cadastrado com sucesso!' });
    } catch (error) {
        console.error('Erro ao cadastrar medicamento:', error);
        return res.status(500).json({ message: 'Erro ao cadastrar medicamento.' });
    }
};



export const getMedicamentos = (req, res) => {
    Medicamento.findAll((error, resultados) => {
        if (error) {
            console.error('Erro ao buscar medicamentos:', error);
            return res.status(500).json({ message: 'Erro ao buscar medicamentos.' });
        }
        return res.status(200).json(resultados);
    });
};

export const atualizarMedicamento = async (req, res) => {
    const { id } = req.params; // Obtém o ID da URL
    const { nome, dosagem, fabricante, data_validade, quantidade } = req.body;

    // Adicionando logs para debugar
    console.log('Recebendo requisição para atualizar medicamento:');
    console.log('ID do medicamento:', id);
    console.log('Dados para atualização:', req.body);

    try {
        const resultado = await Medicamento.update(id, { nome, dosagem, fabricante, data_validade, quantidade });
        
        if (resultado.affectedRows > 0) {
            return res.status(200).json({ message: 'Medicamento atualizado com sucesso!' });
        } else {
            return res.status(404).json({ message: 'Medicamento não encontrado.' });
        }
    } catch (error) {
        console.error('Erro ao atualizar medicamento:', error);
        return res.status(500).json({ message: 'Erro ao atualizar medicamento.' });
    }
};

export const deleteMedicamento = async (req, res) => {
    const { id } = req.params; // Obtém o ID dos parâmetros da URL

    try {
        const result = await Medicamento.delete(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Medicamento não encontrado' });
        }
        res.status(200).json({ message: 'Medicamento deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar medicamento', error: error.message });
    }
};


