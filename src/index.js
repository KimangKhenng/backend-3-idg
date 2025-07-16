import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/user.route.js';

const app = express();
// POST & PATCH & PUT
app.use(bodyParser.json())

/**
 * Exercise : Create 5 resources
 * GET /api/books
 * GET /api/books/{id}
 * DELETE /api/books/{id}
 * 
 * GET /api/users
 * GET /api/users/{id}
 * DELETE /api/users/{id}
 * PATCH /api/users/{id} 
 * POST /api/users/{id} - If ID already exist - Not allowed, throw 400
 * 
 * GET /api/teachers
 * GET /api/teachers/{id}
 * DELETE /api/teachers/{id}
 * GET /api/money
 * GET /api/money/{id}
 * DELETE /api/money/{id}
 * GET /api/stock
 * GET /api/stock/{id}
 * DELETE /api/stock/{id}
 */

app.use('/api/users', userRoute);

app.listen(3000, () => {
    console.log('Server runing on port 3000');
})