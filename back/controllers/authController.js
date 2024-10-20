// controllers/authController.js
import User from '../models/userModel.js';
import bcrypt from 'bcrypt'

export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      const existingUser = await User.findByEmail(email);
      if (existingUser.length > 0) {
        return res.status(400).json({ message: 'Email já cadastrado.' });
      }
  
      await User.create({ username, email, password });
      return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error); // Adicione esta linha
      return res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
    }
  };

  export const loginUser = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Verifica se o usuário existe
      const user = await User.findByUsername(username);
      if (!user || user.length === 0) {
        return res.status(401).json({ message: 'Nome de usuário ou senha inválidos.' });
      }
  
      // Verifica se a senha está correta
      if (user[0].password !== password) {
        return res.status(401).json({ message: 'Nome de usuário ou senha inválidos.' });
      }
  
      return res.status(200).json({ message: 'Login bem-sucedido!' });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return res.status(500).json({ message: 'Erro ao fazer login.' });
    }
  };