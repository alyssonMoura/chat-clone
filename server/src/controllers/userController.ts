import { Request, Response } from 'express';

// Simulação de um "banco de dados" em memória
let users: { id: number, name: string }[] = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Maria Doe' },
  { id: 4, name: 'Karl Doe' }
];

// GET: Obter todos os usuários
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  res.json(users);
};

// POST: Criar um novo usuário
export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.body;

  // Simular criação de usuário com ID auto-incrementado
  const newUser = { id: users.length + 1, name };
  users.push(newUser);

  res.status(201).json(newUser);
};
