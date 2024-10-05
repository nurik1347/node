const mongoose = require('mongoose');
require('dotenv').config(); // .env faylini o'qish uchun

const connectDB = async () => {
    try {
        // MONGO_URI ni .env faylidan olishx
        const conn = await mongoose.connect('mongodb+srv://nurikmirzaev1747:nurik1347@cluster0.x5wki.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1); // Xatolik bo'lsa jarayonni to'xtatish
    }
};

module.exports = connectDB;
