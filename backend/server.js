// File: backend/server.js

// File: backend/server.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";

// Import routes
import authRoutes from "./routes/authRoutes.js";
import dietChartRoutes from "./routes/dietChartRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/diet-charts", dietChartRoutes);
app.use("/api/tasks", taskRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({ message: err.message });
});

// Export the app for Vercel
export default app;

