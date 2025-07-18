import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/user.route.js';
import teacherRoute from './routes/teacher.route.js';
import stockRoute from './routes/stock.route.js';


const app = express();
// POST & PATCH & PUT
app.use(bodyParser.json())

app.use('/api/users', userRoute);
app.use('/api/teachers', teacherRoute);
app.use('/api/stocks', stockRoute);

app.get('/hello', (req, res) => {
    return res.json("Hello")
})

app.listen(3000, () => {
    console.log('Server runing on port 3000');
})