import express from 'express';

const app = express();
function getAllUsers(req, res) {
    return res.send('Hello World');
}
function running() {
    console.log("Running on 3000");
}
app.get('/users', getAllUsers)

app.listen(3000, running)