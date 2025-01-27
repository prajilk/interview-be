import express from 'express';
const router = express.Router();
import { login } from '../controllers/Admin/Login';
import { createToken } from '../middleware/createToken';

router.post('/login', login, createToken);

export default router;