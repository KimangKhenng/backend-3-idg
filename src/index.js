import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/user.route.js';
import teacherRoute from './routes/teacher.route.js';
import stockRoute from './routes/stock.route.js';
import { dbConnect } from './database/db.js';
import courseRoute from './routes/course.route.js';
import { authenticate, CacheInterceptor, cacheMiddleware, handleError, invalidateCache } from './middlewares/index.js';
import morgan from 'morgan';
import cors from 'cors';
import authRoute from './routes/auth.route.js';
import redisClient from './redis/index.js';


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


app.use('/api/users', authenticate, cacheMiddleware, CacheInterceptor(60 * 10), invalidateCache, userRoute);
app.use('/api/teachers', authenticate, cacheMiddleware, CacheInterceptor(60 * 10), invalidateCache, teacherRoute);
app.use('/api/stocks', authenticate, cacheMiddleware, CacheInterceptor(60 * 10), invalidateCache, stockRoute);
app.use('/api/courses', authenticate, cacheMiddleware, CacheInterceptor(60 * 10), invalidateCache, courseRoute);

app.use('/api/auth', authRoute);

app.use(handleError)

app.listen(3000, () => {
    console.log('Server runing on port 3000');
})