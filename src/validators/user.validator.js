import { checkSchema } from "express-validator";

export const createUserValidator = checkSchema({
    name: {
        matches: {
            options: [/^[A-Za-z\s]+$/]
        },
        errorMessage: "Only letters and space allowed"
    },
    username: {
        isAlpha: true
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
        isEmail: true
    },
    role: {
        isIn: {
            options: ["member", "admin", "editor"]
        },
        errorMessage: "Role must be among member, admin, editor"
    }
})