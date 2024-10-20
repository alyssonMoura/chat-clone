import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import cloneGptRoutes from './routes/cloneGptRoutes'
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/users', userRoutes);
app.use('/api/gpt', cloneGptRoutes);

export default app;
