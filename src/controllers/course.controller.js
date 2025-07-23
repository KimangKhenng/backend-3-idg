import { courseModel } from '../models/course.model.js';
import { stockModel } from '../models/stock.model.js'
/**
 * /api/stock?maxQuantity=20&minQuantity=10
 */
export const getAllCourses = async (req, res) => {
    const courses = await courseModel.find();
    return res.json(courses);
};

export const getCourseById = async (req, res) => {
    const id = req.params.id;
    const stock = await courseModel.findById(id)
    return res.json(stock)
}

export const deleteCourseyId = async (req, res) => {
    const id = req.params.id
    const deleted = await courseModel.deleteOne({ _id: id })
    return res.status(204).json({ message: 'deleted', data: deleted })
}

export const updateCourseById = async (req, res) => {
    const userId = req.params.id
    const result = await courseModel.updateOne({ _id: userId }, req.body)
    return res.status(200).json({ message: 'updated', data: result })
}

export const createCourse = async (req, res) => {
    const course = new courseModel(req.body)
    await course.save()
    return res.status(201).json(course)
}
