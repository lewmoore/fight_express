var express = require("express");
var router = express.Router();

// Fighter new route
router.get("/new", (req, res) => {
  res.render("fighter/new");
});

// Fighter stats route
router.get("/stats", (req, res) => {
  res.render("fighter/stats");
});

// Fighter homepage route
router.get("/", (req, res) => {
  res.render("fighter/home");
});

module.exports = router;
