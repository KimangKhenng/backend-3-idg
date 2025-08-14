export const uploadSingleFile = (req, res) => {
    const file = req.file;
    res.json(file);
}

export const uploadMultiple = (req, res) => {
    const files = req.files;
    res.json(files);
}