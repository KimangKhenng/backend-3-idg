import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'member'
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
userSchema.plugin(mongoosePaginate)

export const userModel = mongoose.model('Users', userSchema)
