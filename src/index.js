import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/user.route.js';
import teacherRoute from './routes/teacher.route.js';
import stockRoute from './routes/stock.route.js';
import { dbConnect } from './database/db.js';
import courseRoute from './routes/course.route.js';
import { authenticate, CacheInterceptor, cacheMiddleware, handleError, invalidateCache, limiter } from './middlewares/index.js';
import morgan from 'morgan';
import cors from 'cors';
import authRoute from './routes/auth.route.js';
import redisClient from './redis/index.js';
import fileRoute from './routes/file.route.js';


await dbConnect().catch((err) => {
    console.log(err)
})

await redisClient.connect().catch((err) => {
    console.log(err)
})

const app = express();
app.use(cors())
// POST & PATCH & PUT
app.use(bodyParser.json())
app.use(morgan('combined'))

app.get('/', (req, res) => {
    return res.status(200).json({ 'status': "Server is running" })
})

app.use('/api/users',
    limiter(60 * 1000, 30), // 1 minute, 30 requests
    authenticate,
    cacheMiddleware,
    CacheInterceptor(60 * 10),
    invalidateCache,
    userRoute);
app.use('/api/teachers',
    limiter(60 * 1000, 60), // 1 minute, 60ß requests
    authenticate,
    cacheMiddleware,
    CacheInterceptor(60 * 10),
    invalidateCache,
    teacherRoute);
app.use('/api/stocks',
    limiter(60 * 1000, 30), // 1 minute, 30 requests
    authenticate,
    cacheMiddleware,
    CacheInterceptor(60 * 10),
    invalidateCache,
    stockRoute);
app.use('/api/courses',
    limiter(60 * 1000, 30), // 1 minute, 30 requests
    authenticate,
    cacheMiddleware,
    CacheInterceptor(60 * 10),
    invalidateCache,
    courseRoute);

app.use('/api/files', fileRoute);

// Auth
app.use('/api/auth',
    limiter(60 * 60 * 1000, 3), // 1 hour, 3 requests
    authRoute);

app.use(handleError)

app.listen(3000, () => {
    console.log('Server runing on port 3000');
})