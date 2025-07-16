// sampleData.js

// 📚 Books
const books = [
    { id: 1, title: "Atomic Habits", author: "James Clear", publishedYear: 2018 },
    { id: 2, title: "Clean Code", author: "Robert C. Martin", publishedYear: 2008 },
    { id: 3, title: "The Pragmatic Programmer", author: "Andrew Hunt", publishedYear: 1999 }
];

// 🧑‍🏫 Teachers
const teachers = [
    { id: 201, name: "Mr. Smith", subject: "Math", yearsOfExperience: 10 },
    { id: 202, name: "Ms. Johnson", subject: "English", yearsOfExperience: 5 },
    { id: 203, name: "Dr. Lee", subject: "Science", yearsOfExperience: 15 }
];

// 💰 Money
const money = [
    { id: 301, currency: "USD", amount: 1000, type: "income" },
    { id: 302, currency: "EUR", amount: 250, type: "expense" },
    { id: 303, currency: "KHR", amount: 400000, type: "income" }
];

// 📦 Stock
const stock = [
    { id: 401, name: "Laptop", quantity: 15, price: 999.99 },
    { id: 402, name: "Smartphone", quantity: 30, price: 499.99 },
    { id: 403, name: "Headphones", quantity: 50, price: 79.99 }
];

// Export all
export {
    books,
    teachers,
    money,
    stock
};