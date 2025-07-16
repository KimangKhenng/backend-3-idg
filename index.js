import express from 'express';
import bodyParser from 'body-parser';
import { users } from './sample.js';

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

app.delete('/api/users/:id', (req, res) => {
    const userId = req.params.id
    const deleteIndex = users.findIndex((u) => {
        return u.id == userId
    })
    if (deleteIndex == -1) {
        return res.json("User not found");
    }
    users.splice(deleteIndex, 1)
    return res.json({ message: `User with Id ${userId} deleted` })
})

app.post('/api/users', (req, res) => {
    const id = req.body.id
    const existIndex = users.findIndex((u) => {
        return u.id == id
    })
    console.log(existIndex)
    if (existIndex != -1) {
        return res.status(400).json({ message: "User exists" })
    }
    users.push(req.body)
    return res.status(201).json({ message: `User with name: ${req.body.name} created` })
})

app.patch('/api/users/:id', (req, res) => {
    const userId = req.params.id
    const userIndex = users.findIndex((u) => {
        return userId == u.id
    })
    if (userIndex == -1) {
        return res.json("User not found");
    }
    users[userIndex] = { id: userId, ...req.body }
    return res.json({ message: `User with id ${userId} updated!` })
})

app.listen(3000, () => {
    console.log('Server runing on port 3000');
})