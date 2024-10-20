import express from 'express';
import { cadastrarMedicamento, getMedicamentos, atualizarMedicamento, deleteMedicamento } from '../controllers/medicamentoController.js';

const router = express.Router();

router.post('/medicamentos', cadastrarMedicamento); // Adicione esta linha
router.get('/medicamentos', getMedicamentos);
router.put('/medicamentos/:id', (req, res, next) => {
    console.log('Rota PUT chamada para atualizar medicamento:', req.params.id);
    next(); // Chama o próximo middleware
}, atualizarMedicamento);
router.delete('/medicamentos/:id', deleteMedicamento)

export default router;
