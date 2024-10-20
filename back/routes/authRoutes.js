// routes/authRoutes.js
import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser); // Rota para registro
router.post('/login', loginUser); // Rota para login

export default router;
