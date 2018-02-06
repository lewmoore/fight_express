var express = require('express');
var router = express.Router();

// Fighter new route
router.get('/new', function(req, res){
  res.send('New Fighter Page');
});

// Fighter stats route
router.get('/stats', function(req, res){
  res.send('Fighter Stats Page')
});

module.exports = router;
