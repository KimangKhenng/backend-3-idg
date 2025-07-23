import { checkSchema } from "express-validator";
import { userModel } from "../models/user.model.js";

export const createUserValidator = checkSchema({
    name: {
        matches: {
            options: [/^[A-Za-z\s]+$/]
        },
        errorMessage: "Only letters and space allowed"
    },
    username: {
        custom: {
            options: async (value) => {
                const user = await userModel.findOne({ username: value })
                if (user)
                    throw new Error(`Username: ${value} already exists`)
            }
        }
    },
    age: {
        isInt: {
            options: {
                min: 10,
                max: 100
            }
        },
        errorMessage: "Minimum age is 10, Maximum is 100"
    },
    email: {
        isEmail: true,
        custom: {
            options: async (value) => {
                const user = await userModel.findOne({ email: value })
                if (user)
                    throw new Error(`Email: ${value} already in use`)
            }
        }
    },
    role: {
        isIn: {
            options: ["member", "admin", "editor"]
        },
        errorMessage: "Role must be among member, admin, editor"
    }
})