// server.js
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import medicamentoRoutes from './routes/medicamentoRoutes.js'
import suporteRoutes from './routes/suporteRoutes.js'
import connection from './db.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json()); // Para lidar com JSON nas requisições

// Usar as rotas de autenticação
app.use('/api/auth', authRoutes);
app.use('/api', medicamentoRoutes)
app.use('/api', suporteRoutes)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
