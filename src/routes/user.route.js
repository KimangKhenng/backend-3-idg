import express from 'express';
import { createUser, deleteUserById, getAllUser, getUserById, updateUesrById } from '../controllers/user.controlller.js';

const userRoute = express.Router();

userRoute.get('/', getAllUser)
userRoute.get('/:id', getUserById)
userRoute.delete('/:id', deleteUserById)
userRoute.post('/', createUser)
userRoute.patch('/:id', updateUesrById)

export default userRoute;