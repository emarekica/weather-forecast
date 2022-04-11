"use strict";

const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

// another default route to test
router.get("/", (req, res) => {
  res.json({ success: "Hello Weather!" });
});

// export route so you know you're using it
module.exports = router;
