var express = require('express');
var app = express();
var fighter = require('./routes/fighter.js')

app.get('/', function(req, res) {
  res.send('Fighting Homepage!');
});

app.get('/about', function(req, res) {
  res.send('About Fighting Page!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

app.use('/fighter', fighter);
