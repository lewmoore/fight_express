var express = require('express');
var app = express();
var fighter = require('./routes/fighter.js')
app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', function(req, res) {
  res.render('homepage', { title: 'Fight Express Homepage',
                            message: 'This is the Fighter Express homepage!'});
});

app.get('/about', function(req, res) {
  res.send('About Fight Express Page!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

app.use('/fighter', fighter);
