import { fileModel } from "../models/file.model.js";

export const uploadSingleFile = async (req, res) => {
    const file = req.file;
    const newFile = new fileModel(file)
    await newFile.save();
    res.json(file);
}

export const uploadMultiple = async (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
        return res.status(400).json({ message: "No files uploaded" });
    }
    console.log(files)
    const fileModels = files.map(file => new fileModel(file));
    await Promise.all(fileModels.map(fileModel => fileModel.save()));
    res.json(files);
}