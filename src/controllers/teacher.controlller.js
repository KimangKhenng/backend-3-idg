import { teachers } from "../models/teacher.model.js";



export const getAllTeacher = (req, res) => {
    // return res.json(teachers);
    let filterTeachers = teachers;
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

export const getTeacherById = (req, res) => {
    const id = req.params.id;
    const user = teachers.find((u) => {
        return u.id == id
    })
    if (!user) {
        return res.json({ messsge: "Not Found" })
    }
    return res.json(user)
}

export const deleteTeacherById = (req, res) => {
    const userId = req.params.id
    const deleteIndex = teachers.findIndex((u) => {
        return u.id == userId
    })
    if (deleteIndex == -1) {
        return res.json("Teacher not found");
    }
    teachers.splice(deleteIndex, 1)
    return res.json({ message: `Teacher with Id ${userId} deleted` })
}

export const updateTeacherById = (req, res) => {
    const userId = req.params.id
    const userIndex = teachers.findIndex((u) => {
        return userId == u.id
    })
    if (userIndex == -1) {
        return res.json("Teacher not found");
    }
    teachers[userIndex] = { id: userId, ...req.body }
    return res.json({ message: `Teacher with id ${userId} updated!` })
}

export const createTeacher = (req, res) => {
    const id = req.body.id
    const existIndex = teachers.findIndex((u) => {
        return u.id == id
    })
    console.log(existIndex)
    if (existIndex != -1) {
        return res.status(400).json({ message: "Teacher exists" })
    }
    teachers.push(req.body)
    return res.status(201).json({ message: `Teacher with name: ${req.body.name} created` })
}
