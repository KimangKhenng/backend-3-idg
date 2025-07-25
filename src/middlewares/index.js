import { validationResult } from 'express-validator'

export function teacherMiddleware(req, res, next) {
    if (req.query.minYear) {
        const minYear = parseInt(req.query.minYear)
        if (isNaN(minYear)) {
            return res.status(400).json({ message: "minYear must be integer" });
        }
    }
    next()
}

export function stockMiddleware(req, res, next) {
    const errors = []
    let minQuantity = req.query.minQuantity;
    let maxQuantity = req.query.maxQuantity;
    let minPrice = req.query.minPrice;
    let maxPrice = req.query.maxPrice;

    if (minQuantity) {
        minQuantity = parseInt(minQuantity)
        if (isNaN(minQuantity)) {
            errors.push({ error: 'minQuantity' })
        }
    }
    if (maxQuantity) {
        maxQuantity = parseInt(maxQuantity)
        if (isNaN(maxQuantity)) {
            errors.push({ error: 'maxQuantity' })
        }
    }
    if (minPrice) {
        minPrice = parseFloat(minPrice)
        if (isNaN(minPrice)) {
            errors.push({ error: 'minPrice' })
        }
    }
    if (maxPrice) {
        maxPrice = parseFloat(maxPrice)
        if (isNaN(maxPrice)) {
            errors.push({ error: 'maxPrice' })
        }
    }
    if (errors.length > 0) {
        return res.status(400).json(errors)
    }
    next()
}

export function handleValidation(req, res, next) {
    const result = validationResult(req);
    console.log(result)
    if (!result.isEmpty()) {
        return res.status(400).send({ errors: result.array() });
    }
    next()
}

export function handleError(error, req, res, next) {
    return res.status(500).json({ message: error.message })
}

export function authenticate(req, res, next) {
    // Verify JWT
    const token = req.headers.authorization.split(' ')[1]
    console.log(req.headers.authorization)
    if (token != 'abcz123cadt') {
        return res.status(401).json({ message: "Unauthroized" })
    }
    next()
}

