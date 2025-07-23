import express from 'express';
import { createCourse, deleteCourseyId, getAllCourses, getCourseById, updateCourseById } from '../controllers/course.controller.js';


const courseRoute = express.Router();

courseRoute.get('/', getAllCourses)
courseRoute.get('/:id', getCourseById)
courseRoute.delete('/:id', deleteCourseyId)
courseRoute.post('/', createCourse)
courseRoute.patch('/:id', updateCourseById)

export default courseRoute;