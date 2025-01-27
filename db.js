const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL)
  .then(() => console.log('Connected to MongoDB server'))
  .catch((err) => console.error('MongoDB connection error:', err));


const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb server');
});

db.on('error',()=>{
    console.log('mongodb connection error',err);
});

db.on('disconnected',()=>{
    console.log('mongodb disconnected');
});

module.exports = db;