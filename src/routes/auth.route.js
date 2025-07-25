import express from 'express';
import { login, signUp } from '../controllers/auth.controller.js';

const authRoute = express.Router();

authRoute.post('/', login)
authRoute.post('/sign-up', signUp)

export default authRoute;