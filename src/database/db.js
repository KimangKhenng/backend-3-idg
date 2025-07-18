import mongoose from "mongoose";

const dbName = "cadt-idg-003";
const mongoURI = 'mongodb://localhost:27017';

export async function dbConnect() {
    mongoose.connection.on('connected', () => {
        console.log('Conected: ', dbName);
    })
    await mongoose.connect(mongoURI, {
        dbName
    })
}