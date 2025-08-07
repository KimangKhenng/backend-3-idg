import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/user.route.js';
import teacherRoute from './routes/teacher.route.js';
import stockRoute from './routes/stock.route.js';
import { dbConnect } from './database/db.js';
import courseRoute from './routes/course.route.js';
import { authenticate, handleError } from './middlewares/index.js';
import morgan from 'morgan';
import cors from 'cors';
import authRoute from './routes/auth.route.js';
import redisClient from './redis/index.js';


dbConnect().catch((err) => {
    console.log(err)
})

redisClient.connect().catch((err) => {
    console.log(err)
})

const app = express();
app.use(cors())
// POST & PATCH & PUT
app.use(bodyParser.json())
app.use(morgan('combined'))

app.use('/api/users', authenticate, userRoute);
app.use('/api/teachers', authenticate, teacherRoute);
app.use('/api/stocks', authenticate, stockRoute);
app.use('/api/courses', authenticate, courseRoute);

app.use('/api/auth', authRoute);

app.use(handleError)

app.listen(3000, () => {
    console.log('Server runing on port 3000');
})