import { stockModel } from '../models/stock.model.js'
/**
 * /api/stock?maxQuantity=20&minQuantity=10
 */
export const getAllStock = (req, res) => {
    let filterStocks = stock;

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

export const createStock = async (req, res) => {
    const stock = new stockModel(req.body)
    await stock.save()
    return res.status(201).json(stock)
}
