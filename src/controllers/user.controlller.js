import { userModel } from "../models/user.model.js"
import asyncHandler from 'express-async-handler'

export const getAllUser = asyncHandler(async (req, res) => {
    let filterUsers = await userModel.find()
    if (req.query.role) {
        filterUsers = users.filter((u) => {
            return u.role == req.query.role
        })
    }
    let minAge = parseInt(req.query.minAge)
    let maxAge = parseInt(req.query.maxAge)

    if (minAge > maxAge) {
        maxAge = minAge
    }

    if (req.query.minAge) {
        filterUsers = filterUsers.filter((u) => {
            return u.age >= minAge
        })
    }
    if (req.query.maxAge) {
        filterUsers = filterUsers.filter((u) => {
            return u.age <= maxAge
        })
    }
    return res.json(filterUsers)
})

export const getUserById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const user = await userModel.findById(id)
    if (!user) {
        return res.json({ messsge: "Not Found" })
    }
    return res.json(user)
})

export const deleteUserById = asyncHandler(async (req, res) => {
    const userId = req.params.id
    const result = await userModel.deleteOne({ _id: userId })
    return res.json({ message: result })
})

export const updateUesrById = asyncHandler(async (req, res) => {
    const userId = req.params.id
    const result = await userModel.updateOne({ _id: userId }, req.body)
    return res.status(200).json({ message: 'updated', data: result })
})

export const createUser = asyncHandler(async (req, res) => {
    const user = new userModel(req.body)
    await user.save()
    return res.status(201).json(user)
})
