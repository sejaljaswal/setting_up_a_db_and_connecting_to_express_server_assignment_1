const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { resolve } = require('path');

// Load environment variables
dotenv.config();

console.log("🔍 MongoDB URI from .env:", process.env.MONGO_URI); // Debugging log

const app = express();
const port = 5005;

// MongoDB connection setup
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to database');
  } catch (error) {
    console.error(`❌ Error connecting to database: ${error.message}`);
    process.exit(1); // Exit process if database connection fails
  }
};

// Call the function to connect to MongoDB
connectDB();

// Serve static files (e.g., CSS, JS)
app.use(express.static('static'));

// Route to serve HTML page
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});