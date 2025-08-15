// api/teachers?subject=Math&minYear=5
import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const fileSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    // size: {
    //     type: Number,
    //     required: true
    // },
    originalname: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    mimetype: {
        type: String,
        required: true
    },
    encoding: {
        type: String,
        required: true
    },
    bucket: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

fileSchema.plugin(mongoosePaginate)

export const fileModel = mongoose.model("Files", fileSchema);