// models/medicamentoModel.js
import connection from '../db.js';

const Medicamento = {
    // Método para criar um novo medicamento
    create: async (medicamentoData) => {
        const { nome, dosagem, fabricante, data_validade, quantidade, preco } = medicamentoData;
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO medicamentos (nome, dosagem, fabricante, data_validade, quantidade, preco) VALUES (?, ?, ?, ?, ?, ?)';
            connection.query(query, [nome, dosagem, fabricante, data_validade, quantidade, preco], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });
    },

    // Método para buscar todos os medicamentos
    findAll: (callback) => {
        const query = 'SELECT * FROM medicamentos';
        connection.query(query, (error, results) => {
            if (error) {
                return callback(error, null); // Chama o callback com o erro
            }
            callback(null, results); // Chama o callback com os resultados
        });
    },

    update: async (id, medicamentoData) => {
        const { nome, dosagem, fabricante, data_validade, quantidade } = medicamentoData;
        const formattedDate = new Date(data_validade).toISOString().split('T')[0];

        return new Promise((resolve, reject) => {
            const query = 'UPDATE medicamentos SET nome = ?, dosagem = ?, fabricante = ?, data_validade = ?, quantidade = ? WHERE id = ?';
            connection.query(query, [nome, dosagem, fabricante, formattedDate, quantidade, id], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });
    },
    delete: async (id) => {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM medicamentos WHERE id = ?';
            connection.query(query, [id], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });
    },
    
};

export default Medicamento;
