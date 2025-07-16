import express from 'express';
import { users } from './sample.js';

const app = express();

/**
 * Exercise : Create 5 resources
 * GET /api/books
 * GET /api/books/{id}
 * DELETE /api/books/{id}
 * GET /api/users
 * GET /api/users/{id}
 * DELETE /api/users/{id}
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

app.get('/api/users', (req, res) => {
    return res.json(users)
})

app.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find((u) => {
        return u.id == id
    })
    if (!user) {
        return res.json({ messsge: "Not Found" })
    }
    return res.json(user)
})

app.listen(3000, () => {
    console.log('Server runing on port 3000');
})