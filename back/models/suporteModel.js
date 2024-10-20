import connection from '../db.js';

const SuporteModel = {
  // Método para criar um novo suporte
  create: async (suporteData) => {
    const { nome, email, mensagem } = suporteData;
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO suporte (nome, email, mensagem) VALUES (?, ?, ?)';
      console.log('Executando query de inserção:', query);
      connection.query(query, [nome, email, mensagem], (error, results) => {
        if (error) {
          console.error('Erro ao inserir suporte:', error);
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  // Método para buscar todos os suportes
  findAll: (callback) => {
    const query = 'SELECT * FROM suporte';
    console.log('Executando query de seleção:', query);
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Erro ao buscar suportes:', error);
        return callback(error, null);
      }
      callback(null, results);
    });
  },

  // Método para atualizar um suporte
  update: async (id, suporteData) => {
    const { nome, email, mensagem } = suporteData;
    
    return new Promise((resolve, reject) => {
      const query = 'UPDATE suporte SET nome = ?, email = ?, mensagem = ? WHERE id = ?';
      console.log('Executando query de atualização:', query);
      connection.query(query, [nome, email, mensagem, id], (error, results) => {
        if (error) {
          console.error('Erro ao atualizar suporte:', error);
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  // Método para deletar um suporte
  delete: async (id) => {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM suporte WHERE id = ?';
      console.log('Executando query de exclusão:', query);
      connection.query(query, [id], (error, results) => {
        if (error) {
          console.error('Erro ao deletar suporte:', error);
          return reject(error);
        }
        resolve(results);
      });
    });
  },
};

export default SuporteModel;
