import { Router } from 'express';
import { sendText } from '../controllers/cloneGptController';

const router = Router();

// Rotas
router.post('/', sendText);

export default router;
