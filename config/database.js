const mongoose = require('mongoose');
require('dotenv').config(); // .env faylini o'qish uchun

// MongoDB bilan bog'lanish funksiyasi
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://nurikmirzaev1747:nurik1347@cluster0.x5wki.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            // useNewUrlParser: true, // Olib tashlandi
            // useUnifiedTopology: true // Olib tashlandi
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
