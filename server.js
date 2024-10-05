const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database'); // MongoDB ulanishi uchun faylni import qilish
const UserRouter = require('./routes/users')
const cors = require('cors');

// .env faylini yuklash
dotenv.config();

// MongoDB ga ulanish
connectDB();

const app = express();
app.use(cors())

// Middleware to parse JSON data
app.use(express.json());

// Route example
app.get('/', (req, res) => {
  res.send('Server is running');
});
app.use('/user', UserRouter)
const PORT = process.env.PORT || 5001;

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
