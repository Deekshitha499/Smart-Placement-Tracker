const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const studentRoutes = require("./routes/studentRoutes");

const errorHandler = require("./middlewares/errorMiddleware");

const atsRoutes = require("./routes/atsRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/students", studentRoutes);

app.use(errorHandler);

app.use("/api/ats", atsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

