require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

app.use((err,req,res,next)=>{
    console.log(err);
    
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
});

cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    allowedHeaders: ['Content-Type','Authorizartion']
});

app.use(express.json());
mongoose.connect(MONGO_URL).then(()=>{
    console.log("Mongo DB Connected");
}).catch((err)=>{
    console.log(err);
});


app.listen(PORT,()=>{
    console.log("Server is running on port",PORT);
})