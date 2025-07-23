import express from 'express';
import { createUser, deleteUserById, getAllUser, getUserById, updateUesrById } from '../controllers/user.controlller.js';
import { body } from 'express-validator';
import { handleValidation } from '../middlewares/index.js';
const userRoute = express.Router();

userRoute.get('/', getAllUser)
userRoute.get('/:id', getUserById)
userRoute.delete('/:id', deleteUserById)
userRoute.post('/',
    body('email').isEmail(),
    body('age').isInt({ min: 10, max: 100 }),
    body('role').isIn(['member', 'admin', 'editor']),
    body('name').isAlpha(),
    handleValidation, createUser)
userRoute.patch('/:id', updateUesrById)

export default userRoute;