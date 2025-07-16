import express from 'express';
import { createStock, deleteStockById, getAllStock, getStockById, updateStockById } from '../controllers/stock.controlller.js';

const stockRoute = express.Router();

stockRoute.get('/', getAllStock)
stockRoute.get('/:id', getStockById)
stockRoute.delete('/:id', deleteStockById)
stockRoute.post('/', createStock)
stockRoute.patch('/:id', updateStockById)

export default stockRoute;