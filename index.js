const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load Environment Variables from .env File
dotenv.config();

// Initialize Express App
const app = express();

// Define the Port from Environment Variables or Default to 5000
const PORT = process.env.PORT || 5000;

// MongoDB Connection URI from Environment Variables
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to database');
})
.catch((error) => {
  console.error('Error connecting to database:', error.message);
});

// Define a Simple Route for Testing
app.get('/', (req, res) => {
  res.send('Customer Management System Backend is Running');
});

// Start the Express Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
