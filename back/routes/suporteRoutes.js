import express from 'express';
import { createSuporte } from '../controllers/suporteController.js';

const router = express.Router();

// Criar uma nova solicitação de suporte
router.post('/suporte', createSuporte);

// // Obter todas as solicitações de suporte
// router.get('/suporte', suporteController.getAllSuportes);

// // Atualizar uma solicitação de suporte
// router.put('/suporte/:id', suporteController.updateSuporte);

// // Deletar uma solicitação de suporte
// router.delete('/suporte/:id', suporteController.deleteSuporte);

export default router;
