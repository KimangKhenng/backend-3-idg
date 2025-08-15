import { minioClient } from "../middlewares/multer.js";
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
    // console.log(files)
    const fileModels = files.map(file => new fileModel(file));
    await Promise.all(fileModels.map(fileModel => fileModel.save()));
    res.json(files);
}

export const getFileById = async (req, res) => {
    const fileId = req.params.id;
    const file = await fileModel.findById(fileId);
    const fileStream = await minioClient.getObject(file.bucket, file.filename);
    res.set({
        'Content-Type': file.mimetype,
        'Content-Disposition': `attachment; filename="${file.originalname}"`
    });
    return fileStream.pipe(res);
}

export const deleteFileById = async (req, res) => {
    const fileId = req.params.id;
    const file = await fileModel.findById(fileId);
    if (!file) {
        return res.status(404).json({ message: "File not found" });
    }
    await minioClient.removeObject(file.bucket, file.filename, {})
    return res.status(200).json({ message: "File deleted successfully" });
}