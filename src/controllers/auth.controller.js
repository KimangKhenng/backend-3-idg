import asyncHandler from 'express-async-handler'

export const login = asyncHandler(async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // Login
    if (username == 'demo' && password == 'password123') {
        return res.json({ token: 'abcz123cadt' })
    }
    return res.status(400).json({ message: 'Invalid credential' })
})