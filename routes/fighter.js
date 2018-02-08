var express = require('express');
var router = express.Router();

// Fighter new route
router.get('/new', function(req, res){
  res.render('fighter/new')
});

// Fighter stats route
router.get('/stats', function(req, res){
  res.render('fighter/stats')
});

// Fighter homepage route
router.get('/', function(req, res){
  res.render('fighter/home')
});

module.exports = router;
