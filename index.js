import express from 'express';
import { users } from './sample.js';

const app = express();

/**
 * Exercise : Create 5 resources
 * GET /api/books
 * GET /api/users
 * GET /api/teachers
 * GET /api/money
 * GET /api/stock
 */

app.get('/users', (req, res) => {
    return res.json(users)
})
app.listen(3000, () => {
    console.log('Server runing on port 3000');
})