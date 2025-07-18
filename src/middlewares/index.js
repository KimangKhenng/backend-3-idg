export function teacherMiddleware(req, res, next) {
    if (req.query.minYear) {
        const minYear = parseInt(req.query.minYear)
        if (isNaN(minYear)) {
            return res.status(400).json({ message: "minYear must be integer" });
        }
    }
    next()
}