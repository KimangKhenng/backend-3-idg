import express from 'express';
import { createTeacher, deleteTeacherById, getAllTeacher, getTeacherById, updateTeacherById } from '../controllers/teacher.controlller.js';


const teacherRoute = express.Router();

teacherRoute.get('/', getAllTeacher)
teacherRoute.get('/:id', getTeacherById)
teacherRoute.delete('/:id', deleteTeacherById)
teacherRoute.post('/', createTeacher)
teacherRoute.patch('/:id', updateTeacherById)

export default teacherRoute;