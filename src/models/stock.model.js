import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const stockSchema = new mongoose.Schema({
    name: {
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    byUser: {
        type: mongoose.Types.ObjectId,
        ref: 'Users'
    }
}, {
    timestamps: true
})
stockSchema.plugin(mongoosePaginate)

export const stockModel = mongoose.model('Stocks', stockSchema)

// export const stock = [
//     { id: 401, name: "Laptop", quantity: 15, price: 999.99 },
//     { id: 402, name: "Smartphone", quantity: 30, price: 499.99 },
//     { id: 403, name: "Headphones", quantity: 50, price: 79.99 },
//     { id: 404, name: "Tablet", quantity: 20, price: 299.99 },
//     { id: 405, name: "Monitor", quantity: 18, price: 199.99 },
//     { id: 406, name: "Keyboard", quantity: 45, price: 49.99 },
//     { id: 407, name: "Mouse", quantity: 60, price: 29.99 },
//     { id: 408, name: "USB Drive", quantity: 100, price: 19.99 },
//     { id: 409, name: "External Hard Drive", quantity: 25, price: 89.99 },
//     { id: 410, name: "Webcam", quantity: 22, price: 59.99 },
//     { id: 411, name: "Microphone", quantity: 15, price: 109.99 },
//     { id: 412, name: "Printer", quantity: 10, price: 149.99 },
//     { id: 413, name: "Scanner", quantity: 8, price: 129.99 },
//     { id: 414, name: "Router", quantity: 40, price: 69.99 },
//     { id: 415, name: "Modem", quantity: 35, price: 59.99 },
//     { id: 416, name: "Power Bank", quantity: 55, price: 39.99 },
//     { id: 417, name: "Smartwatch", quantity: 28, price: 199.99 },
//     { id: 418, name: "VR Headset", quantity: 12, price: 399.99 },
//     { id: 419, name: "Graphics Card", quantity: 6, price: 599.99 },
//     { id: 420, name: "Motherboard", quantity: 9, price: 249.99 },
//     { id: 421, name: "RAM 16GB", quantity: 30, price: 79.99 },
//     { id: 422, name: "SSD 1TB", quantity: 20, price: 139.99 },
//     { id: 423, name: "HDD 2TB", quantity: 25, price: 89.99 },
//     { id: 424, name: "CPU", quantity: 10, price: 299.99 },
//     { id: 425, name: "Cooling Fan", quantity: 50, price: 24.99 },
//     { id: 426, name: "Laptop Bag", quantity: 45, price: 34.99 },
//     { id: 427, name: "HDMI Cable", quantity: 75, price: 12.99 },
//     { id: 428, name: "Ethernet Cable", quantity: 65, price: 9.99 },
//     { id: 429, name: "Surge Protector", quantity: 40, price: 19.99 },
//     { id: 430, name: "Projector", quantity: 5, price: 499.99 },
//     { id: 431, name: "TV 50\"", quantity: 7, price: 699.99 },
//     { id: 432, name: "Bluetooth Speaker", quantity: 38, price: 59.99 },
//     { id: 433, name: "Wireless Charger", quantity: 33, price: 29.99 },
//     { id: 434, name: "Camera", quantity: 11, price: 549.99 },
//     { id: 435, name: "Tripod", quantity: 20, price: 44.99 },
//     { id: 436, name: "Flashlight", quantity: 70, price: 14.99 },
//     { id: 437, name: "Smart Light Bulb", quantity: 60, price: 24.99 },
//     { id: 438, name: "Drone", quantity: 4, price: 899.99 },
//     { id: 439, name: "Smart Thermostat", quantity: 13, price: 149.99 },
//     { id: 440, name: "Game Console", quantity: 9, price: 499.99 },
//     { id: 441, name: "Game Controller", quantity: 25, price: 59.99 },
//     { id: 442, name: "E-Reader", quantity: 14, price: 129.99 },
//     { id: 443, name: "Smart Plug", quantity: 48, price: 19.99 },
//     { id: 444, name: "Dash Cam", quantity: 17, price: 89.99 },
//     { id: 445, name: "Fitness Tracker", quantity: 31, price: 99.99 },
//     { id: 446, name: "Portable Projector", quantity: 6, price: 299.99 },
//     { id: 447, name: "Laptop Stand", quantity: 34, price: 27.99 },
//     { id: 448, name: "Phone Case", quantity: 80, price: 14.99 },
//     { id: 449, name: "Screen Protector", quantity: 90, price: 9.99 },
//     { id: 450, name: "USB Hub", quantity: 39, price: 22.99 }
// ];

