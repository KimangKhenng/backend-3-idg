// api/teachers?subject=Math&minYear=5
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    credit: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    taughtBy: [{ type: mongoose.Types.ObjectId, ref: 'Teachers' }]
}, {
    timestamps: true
});

export const courseModel = mongoose.model("Courses", courseSchema);