import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'
import { userModel } from '../models/user.model.js';

export const login = asyncHandler(async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // Login
    if (username == 'demo' && password == 'password123') {
        return res.json({ token: 'abcz123cadt' })
    }
    return res.status(400).json({ message: 'Invalid credential' })
})

export const signUp = asyncHandler(async (req, res) => {
    const { name, username, role, age, email, password } = req.body
    const encrypedPassword = bcrypt.hashSync(password, 10)
    const user = new userModel({
        name,
        username,
        age,
        role,
        email,
        password: encrypedPassword
    })
    await user.save()
    return res.json(user)
})