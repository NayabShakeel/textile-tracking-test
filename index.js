// index.js - Single entry point for both frontend + backend on Replit

// 1. Backend server (your /api/server.js)
const express = require("express");
const path = require("path");
const api = require("./api/server");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public/
app.use(express.static(path.join(__dirname, "public")));

// Use your existing API
app.use("/api", api);

// Fallback to index.html for SPA routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
