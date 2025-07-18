import express from 'express';
import { createStock, deleteStockById, getAllStock, getStockById, updateStockById } from '../controllers/stock.controlller.js';
import { stockMiddleware } from '../middlewares/index.js';

const stockRoute = express.Router();

stockRoute.get('/', stockMiddleware, getAllStock)
stockRoute.get('/:id', getStockById)
stockRoute.delete('/:id', deleteStockById)
stockRoute.post('/', createStock)
stockRoute.patch('/:id', updateStockById)

export default stockRoute;