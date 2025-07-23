import { checkSchema } from "express-validator";

export const createUserValidator = checkSchema({
    name: {
        matches: {
            options: [/^[A-Za-z\s]+$/]
        }
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
        }
    },
    email: {
        isEmail: true
    },
    role: {
        isIn: {
            options: ["member", "admin", "editor"]
        }
    }
})