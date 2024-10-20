import SuporteModel from '../models/suporteModel.js';

// Cadastrar novo suporte
export const createSuporte = async (req, res) => {
  const { nome, email, mensagem } = req.body;

  try {
    await SuporteModel.create({ nome, email, mensagem });
    return res.status(201).json({ message: 'Suporte criado com sucesso!' });
  } catch (error) {
    console.error('Erro ao criar suporte:', error);
    return res.status(500).json({ message: 'Erro ao criar suporte.' });
  }
};

// Obter todos os suportes
export const getSuportes = (req, res) => {
  SuporteModel.findAll((error, resultados) => {
    if (error) {
      console.error('Erro ao buscar suportes:', error);
      return res.status(500).json({ message: 'Erro ao buscar suportes.' });
    }
    return res.status(200).json(resultados);
  });
};

// Atualizar um suporte existente
export const updateSuporte = async (req, res) => {
  const { id } = req.params;
  const { nome, email, mensagem } = req.body;

  console.log('Atualizando suporte:', id);
  console.log('Dados recebidos para atualização:', req.body);

  try {
    const resultado = await SuporteModel.update(id, { nome, email, mensagem });

    if (resultado.affectedRows > 0) {
      return res.status(200).json({ message: 'Suporte atualizado com sucesso!' });
    } else {
      return res.status(404).json({ message: 'Suporte não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao atualizar suporte:', error);
    return res.status(500).json({ message: 'Erro ao atualizar suporte.' });
  }
};

// Deletar um suporte
export const deleteSuporte = async (req, res) => {
  const { id } = req.params;

  console.log('Deletando suporte ID:', id);

  try {
    const resultado = await SuporteModel.delete(id);

    if (resultado.affectedRows > 0) {
      return res.status(204).send(); // No Content
    } else {
      return res.status(404).json({ message: 'Suporte não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao deletar suporte:', error);
    return res.status(500).json({ message: 'Erro ao deletar suporte.' });
  }
};
