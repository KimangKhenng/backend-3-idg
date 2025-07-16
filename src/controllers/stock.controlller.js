import { stock } from "../models/stock.model.js";


export const getAllStock = (req, res) => {
    return res.json(stock)
}

export const getStockById = (req, res) => {
    const id = req.params.id;
    const user = stock.find((u) => {
        return u.id == id
    })
    if (!user) {
        return res.json({ messsge: "Not Found" })
    }
    return res.json(user)
}

export const deleteStockById = (req, res) => {
    const userId = req.params.id
    const deleteIndex = stock.findIndex((u) => {
        return u.id == userId
    })
    if (deleteIndex == -1) {
        return res.json("Stock not found");
    }
    stock.splice(deleteIndex, 1)
    return res.json({ message: `Stock with Id ${userId} deleted` })
}

export const updateStockById = (req, res) => {
    const userId = req.params.id
    const userIndex = stock.findIndex((u) => {
        return userId == u.id
    })
    if (userIndex == -1) {
        return res.json("Stock not found");
    }
    stock[userIndex] = { id: userId, ...req.body }
    return res.json({ message: `Stock with id ${userId} updated!` })
}

export const createStock = (req, res) => {
    const id = req.body.id
    const existIndex = stock.findIndex((u) => {
        return u.id == id
    })
    console.log(existIndex)
    if (existIndex != -1) {
        return res.status(400).json({ message: "Stock exists" })
    }
    stock.push(req.body)
    return res.status(201).json({ message: `Stock with name: ${req.body.name} created` })
}
