require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// Debug check
console.log("MONGO_URL from .env:", MONGO_URL);

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
});

mongoose.connect(MONGO_URL)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log("❌ MongoDB Error:", err));

app.listen(PORT, () => {
    console.log("🚀 Server is running on port", PORT);
});
