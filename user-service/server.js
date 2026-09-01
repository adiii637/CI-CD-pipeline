// Load environment variables from .env file
const dotenv = require("dotenv");
dotenv.config();

// Import required packages
const express = require("express");
const mongoose = require("mongoose");

// Create Express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Function to connect to MongoDB using Mongoose
const connectDB = async () => {
  // Use .env variable if provided, otherwise use a local default database URL
  const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/user-service";

  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    // Continue running the app even if DB is unavailable
    console.log("Continuing without database for now...");
  }
};

// Call the DB connection function when the server starts
connectDB();

// Basic route for health check / home page
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Express With docker ..</h1>");
});

// Set app port from environment or default to 5050
const PORT = process.env.PORT || 5050;

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server Started at PORT:${PORT}`);
});
