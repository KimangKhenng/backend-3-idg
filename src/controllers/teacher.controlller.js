import { teacherModel } from "../models/teacher.model.js";
import asyncHandler from 'express-async-handler'


export const getAllTeacher = asyncHandler(async (req, res) => {

    const limit = req.query.limit || 10
    const page = req.query.page || 1
    const populate = req.query.populate || ''
    const options = {
        page,
        limit,
        populate,
    };
    let filterTeachers = await teacherModel.paginate({}, options)
    return res.status(200).json(filterTeachers)
})

export const getTeacherById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const user = await teacherModel.findById(id)
    if (!user) {
        return res.json({ messsge: "Not Found" })
    }
    return res.json(user)
})

export const deleteTeacherById = asyncHandler(async (req, res) => {
    const userId = req.params.id
    const reesult = await teacherModel.deleteOne({ _id: userId })
    teachers.splice(deleteIndex, 1)
    return res.json({ message: reesult })
})

export const updateTeacherById = asyncHandler(async (req, res) => {
    const userId = req.params.id
    const result = await teacherModel.updateOne({ _id: userId }, req.body)
    return res.json({ message: result })
})

export const createTeacher = asyncHandler(async (req, res) => {
    const teacher = new teacherModel(req.body)
    await teacher.save()
    return res.status(201).json({ message: `Teacher with name: ${teacher.name} created` })
})
