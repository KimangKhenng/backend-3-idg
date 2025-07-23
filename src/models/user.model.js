import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
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
    }
})

export const userModel = mongoose.model('Users', userSchema)



// export const users = [
//     { id: 1, name: "Alice Smith", username: "alice01", email: "alice01@example.com", age: 24, role: "member" },
//     { id: 2, name: "Bob Johnson", username: "bobbyJ", email: "bobbyJ@example.com", age: 31, role: "admin" },
//     { id: 3, name: "Charlie Lee", username: "charlie_l", email: "charlie_l@example.com", age: 27, role: "editor" },
//     { id: 4, name: "Diana King", username: "diana_king", email: "diana_king@example.com", age: 22, role: "member" },
//     { id: 5, name: "Ethan Wright", username: "ethan.w", email: "ethan.w@example.com", age: 35, role: "admin" },
//     { id: 6, name: "Fiona Adams", username: "fiona_a", email: "fiona_a@example.com", age: 29, role: "member" },
//     { id: 7, name: "George Young", username: "geoY", email: "geoY@example.com", age: 33, role: "editor" },
//     { id: 8, name: "Hannah Bell", username: "hannahbell", email: "hannahbell@example.com", age: 26, role: "member" },
//     { id: 9, name: "Ian Brooks", username: "ian_b", email: "ian_b@example.com", age: 30, role: "admin" },
//     { id: 10, name: "Julia Ward", username: "juliaward", email: "juliaward@example.com", age: 21, role: "member" },
//     { id: 11, name: "Kevin Ray", username: "kevinray", email: "kevinray@example.com", age: 32, role: "editor" },
//     { id: 12, name: "Laura Kim", username: "laura_k", email: "laura_k@example.com", age: 28, role: "member" },
//     { id: 13, name: "Mike Ford", username: "mike.f", email: "mike.f@example.com", age: 36, role: "admin" },
//     { id: 14, name: "Nina Grant", username: "nina_grant", email: "nina_grant@example.com", age: 25, role: "editor" },
//     { id: 15, name: "Oscar Hall", username: "oscarH", email: "oscarH@example.com", age: 29, role: "member" },
//     { id: 16, name: "Paula Green", username: "paulag", email: "paulag@example.com", age: 23, role: "member" },
//     { id: 17, name: "Quinn Baker", username: "quinn_b", email: "quinn_b@example.com", age: 34, role: "admin" },
//     { id: 18, name: "Rachel Moore", username: "rachelM", email: "rachelM@example.com", age: 31, role: "editor" },
//     { id: 19, name: "Sam Carter", username: "sam.c", email: "sam.c@example.com", age: 27, role: "member" },
//     { id: 20, name: "Tina Phillips", username: "tinap", email: "tinap@example.com", age: 24, role: "member" },
//     { id: 21, name: "Umar Scott", username: "umars", email: "umars@example.com", age: 30, role: "editor" },
//     { id: 22, name: "Vera Price", username: "vera_p", email: "vera_p@example.com", age: 33, role: "admin" },
//     { id: 23, name: "Will Turner", username: "willt", email: "willt@example.com", age: 28, role: "member" },
//     { id: 24, name: "Xena Reed", username: "xena_r", email: "xena_r@example.com", age: 26, role: "member" },
//     { id: 25, name: "Yara Long", username: "yaral", email: "yaral@example.com", age: 22, role: "editor" },
//     { id: 26, name: "Zane Diaz", username: "zane_d", email: "zane_d@example.com", age: 35, role: "admin" },
//     { id: 27, name: "Amber Fox", username: "amberf", email: "amberf@example.com", age: 31, role: "member" },
//     { id: 28, name: "Brian Chase", username: "brianc", email: "brianc@example.com", age: 27, role: "editor" },
//     { id: 29, name: "Cindy Blake", username: "cindyb", email: "cindyb@example.com", age: 29, role: "member" },
//     { id: 30, name: "Derek Lane", username: "derekl", email: "derekl@example.com", age: 34, role: "admin" },
//     { id: 31, name: "Eva Park", username: "evap", email: "evap@example.com", age: 23, role: "member" },
//     { id: 32, name: "Felix Boyd", username: "felixb", email: "felixb@example.com", age: 32, role: "editor" },
//     { id: 33, name: "Gina West", username: "ginaw", email: "ginaw@example.com", age: 25, role: "member" },
//     { id: 34, name: "Harry Stone", username: "harryst", email: "harryst@example.com", age: 28, role: "member" },
//     { id: 35, name: "Isla Knight", username: "isla_k", email: "isla_k@example.com", age: 26, role: "admin" },
//     { id: 36, name: "Jackie Rowe", username: "jackier", email: "jackier@example.com", age: 31, role: "editor" },
//     { id: 37, name: "Ken Miles", username: "kenm", email: "kenm@example.com", age: 30, role: "member" },
//     { id: 38, name: "Lilly Nash", username: "lillyn", email: "lillyn@example.com", age: 24, role: "member" },
//     { id: 39, name: "Mason Pope", username: "masonp", email: "masonp@example.com", age: 35, role: "admin" },
//     { id: 40, name: "Nora Fields", username: "noraf", email: "noraf@example.com", age: 28, role: "editor" },
//     { id: 41, name: "Owen Sharp", username: "owens", email: "owens@example.com", age: 27, role: "member" },
//     { id: 42, name: "Penny Ross", username: "pennyr", email: "pennyr@example.com", age: 22, role: "member" },
//     { id: 43, name: "Quincy Wood", username: "quincyw", email: "quincyw@example.com", age: 33, role: "editor" },
//     { id: 44, name: "Rose Flynn", username: "rosef", email: "rosef@example.com", age: 26, role: "admin" },
//     { id: 45, name: "Sean Cross", username: "seanc", email: "seanc@example.com", age: 29, role: "member" },
//     { id: 46, name: "Tessa Cain", username: "tessac", email: "tessac@example.com", age: 30, role: "member" },
//     { id: 47, name: "Uriel Voss", username: "urielv", email: "urielv@example.com", age: 31, role: "editor" },
//     { id: 48, name: "Vicky Gale", username: "vickyg", email: "vickyg@example.com", age: 27, role: "member" },
//     { id: 49, name: "Walter Nash", username: "waltern", email: "waltern@example.com", age: 34, role: "admin" },
//     { id: 50, name: "Ximena York", username: "ximenay", email: "ximenay@example.com", age: 25, role: "member" }
// ];
