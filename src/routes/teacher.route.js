import express from 'express';
import { createTeacher, deleteTeacherById, getAllTeacher, getTeacherById, updateTeacherById } from '../controllers/teacher.controlller.js';
import { handleValidation, teacherMiddleware } from '../middlewares/index.js';
import { query } from 'express-validator';


const teacherRoute = express.Router();

/** Implement the following query
 * /api/teacher?subject=English&minExp=5
*/
teacherRoute.get('/', teacherMiddleware, query('populate').isIn(['courses', '']), handleValidation, getAllTeacher)
teacherRoute.get('/:id', getTeacherById)
teacherRoute.delete('/:id', deleteTeacherById)
teacherRoute.post('/', createTeacher)
teacherRoute.patch('/:id', updateTeacherById)

export default teacherRoute;