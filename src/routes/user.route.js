import express from 'express';
import { createUser, deleteUserById, getAllUser, getUserById, updateUesrById } from '../controllers/user.controlller.js';
import { handleValidation } from '../middlewares/index.js';
import { createUserValidator } from '../validators/user.validator.js';
const userRoute = express.Router();

userRoute.get('/', getAllUser)
userRoute.get('/:id', getUserById)
userRoute.delete('/:id', deleteUserById)
userRoute.post('/',
    createUserValidator,
    handleValidation,
    createUser
)
userRoute.patch('/:id', updateUesrById)

export default userRoute;