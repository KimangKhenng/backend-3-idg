import { teacherModel } from "../models/teacher.model.js";



export const getAllTeacher = async (req, res) => {
    // return res.json(teachers);
    let filterTeachers = await teacherModel.find().populate('courses');
    if (req.query.subject) {
        filterTeachers = filterTeachers.filter((teacher) => {
            return teacher.subject == req.query.subject
        })
    }
    if (req.query.minYear) {
        filterTeachers = filterTeachers.filter((teacher) => {
            return teacher.yearsOfExperience >= req.query.minYear
        })
    }
    return res.json(filterTeachers)
}

export const getTeacherById = async (req, res) => {
    const id = req.params.id;
    const user = await teacherModel.findById(id)
    if (!user) {
        return res.json({ messsge: "Not Found" })
    }
    return res.json(user)
}

export const deleteTeacherById = async (req, res) => {
    const userId = req.params.id
    const reesult = await teacherModel.deleteOne({ _id: userId })
    teachers.splice(deleteIndex, 1)
    return res.json({ message: reesult })
}

export const updateTeacherById = (req, res) => {
    const userId = req.params.id
    const result = teacherModel.updateOne({ _id: userId }, req.body)
    return res.json({ message: result })
}

export const createTeacher = async (req, res) => {
    const teacher = new teacherModel(req.body)
    await teacher.save()
    return res.status(201).json({ message: `Teacher with name: ${teacher.name} created` })
}
