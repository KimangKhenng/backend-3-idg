import express from 'express';
import { login } from '../controllers/auth.controller.js';

const authRoute = express.Router();

authRoute.post('/', login)

export default authRoute;