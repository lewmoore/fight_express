var express = require('express');
var app = express();
var fighter = require('./routes/fighter.js')

app.get('/', function(req, res) {
  res.send('Fight Express Homepage!');
});

app.get('/about', function(req, res) {
  res.send('About Fight Express Page!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

app.use('/fighter', fighter);
