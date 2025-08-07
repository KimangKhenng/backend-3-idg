import { stockModel } from '../models/stock.model.js'
import asyncHandler from 'express-async-handler'
/**
 * /api/stock?maxQuantity=20&minQuantity=10
 */
export const getAllStock = asyncHandler(async (req, res) => {
    const limit = req.query.limit || 10
    const page = req.query.page || 1
    const populate = req.query.populate || ''
    const options = {
        page,
        limit,
        populate,
    };
    let filterStocks = await stockModel.paginate({}, options);

    return res.status(200).json(filterStocks);
})

export const getStockById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const stock = await stockModel.findById(id).populate('byUser')
    return res.json(stock)
})

export const deleteStockById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const deleted = await stockModel.deleteOne({ _id: id })
    return res.status(204).json({ message: 'deleted', data: deleted })
})

export const updateStockById = asyncHandler(async (req, res) => {
    const userId = req.params.id
    const result = await stockModel.updateOne({ _id: userId }, req.body)
    return res.status(200).json({ message: 'updated', data: result })
})

export const createStock = asyncHandler(async (req, res) => {
    const stock = new stockModel(req.body)
    await stock.save()
    return res.status(201).json(stock)
})
