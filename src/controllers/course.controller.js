import { courseModel } from '../models/course.model.js';
import asyncHandler from 'express-async-handler'
import redisClient from '../redis/index.js';
/**
 * /api/stock?maxQuantity=20&minQuantity=10
 */
export const getAllCourses = asyncHandler(async (req, res) => {
    console.log('Fetching all courses');
    // const courseCacheKey = 'courses';

    // const cacheCourses = await redisClient.get(courseCacheKey)

    // if (cacheCourses) {
    //     return res.json(JSON.parse(cacheCourses));
    // }

    const limit = req.query.limit || 10
    const page = req.query.page || 1
    const populate = req.query.populate || ''
    const options = {
        page,
        limit,
        populate,
    };
    const courses = await courseModel.paginate({}, options);
    // await redisClient.set(courseCacheKey, JSON.stringify(courses), {
    //     EX: 60 * 10 // Cache for 10 minutes
    // });
    return res.status(200).json(courses);
});

export const getCourseById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const stock = await courseModel.findById(id)
    return res.json(stock)
})

export const deleteCourseyId = asyncHandler(async (req, res) => {
    const id = req.params.id
    const deleted = await courseModel.deleteOne({ _id: id })
    return res.status(204).json({ message: 'deleted', data: deleted })
})

export const updateCourseById = asyncHandler(async (req, res) => {
    const userId = req.params.id
    const result = await courseModel.updateOne({ _id: userId }, req.body)
    return res.status(200).json({ message: 'updated', data: result })
})

export const createCourse = asyncHandler(async (req, res) => {
    const course = new courseModel(req.body)
    await course.save()
    return res.status(201).json(course)
})
