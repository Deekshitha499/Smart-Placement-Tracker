const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const studentRoutes = require("./routes/studentRoutes");
const atsRoutes = require("./routes/atsRoutes");
const authRoutes = require("./routes/authRoutes");

const errorHandler = require("./middlewares/errorMiddleware");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
  res.json({
    message: "Smart Placement Tracker Backend Running",
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/ats", atsRoutes);

// Error Handler (Always Last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});