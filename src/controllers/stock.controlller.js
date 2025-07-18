import { stockModel } from '../models/stock.model.js'
/**
 * /api/stock?maxQuantity=20&minQuantity=10
 */
export const getAllStock = async (req, res) => {
    let filterStocks = await stockModel.find();

    if (req.query.minQuantity) {
        filterStocks = filterStocks.filter((s) => {
            return s.quantity >= req.query.minQuantity;
        });
    }

    if (req.query.maxQuantity) {
        filterStocks = filterStocks.filter((s) => {
            return s.quantity <= req.query.maxQuantity;
        });
    }

    if (req.query.minPrice) {
        filterStocks = filterStocks.filter((s) => {
            return s.price >= req.query.minPrice;
        });
    }

    if (req.query.maxPrice) {
        filterStocks = filterStocks.filter((s) => {
            return s.price <= req.query.maxPrice;
        });
    }

    if (filterStocks.length === 0) {
        return res.status(404).json({ message: "Stock not found" });
    }

    return res.json(filterStocks);
};

export const getStockById = async (req, res) => {
    const id = req.params.id;
    const stock = await stockModel.findById(id)
    return res.json(stock)
}

export const deleteStockById = async (req, res) => {
    const id = req.params.id
    const deleted = await stockModel.deleteOne({ _id: id })
    return res.status(204).json({ message: 'deleted', data: deleted })
}

export const updateStockById = (req, res) => {
    const userId = req.params.id
    const result = stockModel.updateOne({ _id: userId }, req.body)
    return res.status(200).json({ message: 'updated', data: result })
}

export const createStock = async (req, res) => {
    const stock = new stockModel(req.body)
    await stock.save()
    return res.status(201).json(stock)
}
