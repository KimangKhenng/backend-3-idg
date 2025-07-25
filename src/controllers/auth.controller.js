import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'
import { userModel } from '../models/user.model.js';
import jwt from 'jsonwebtoken'

export const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    const user = await userModel.findOne({ username: username })
    if (!user) {
        return res.json({ message: "User not found!" })
    }
    const isMatched = bcrypt.compare(password, user.password)
    if (!isMatched) {
        return res.json({ message: "Username or Password Incorrect!" })
    }
    // JWT
    const payload = {
        _id: user._id,
        username: user.username,
        role: user.role
    }
    const token = jwt.sign(
        payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE_IN
    })
    return res.json({ accessToken: token })

    // return res.status(400).json({ message: 'Invalid credential' })
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