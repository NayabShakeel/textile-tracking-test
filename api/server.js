// api/server.js
const express = require("express");
const router = express.Router();

router.get("/scan", (req, res) => {
  res.json({ message: "Scan success!" });
});

module.exports = router;
