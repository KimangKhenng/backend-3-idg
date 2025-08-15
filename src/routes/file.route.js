import express from 'express';
import { getFileById, uploadMultiple, uploadSingleFile } from '../controllers/file.controller.js';
import { upload, uploads } from '../middlewares/multer.js';



const fileRoute = express.Router();

fileRoute.post('/upload', upload, uploadSingleFile)
fileRoute.post('/uploads', uploads, uploadMultiple)
fileRoute.get('/:id', getFileById)


export default fileRoute;