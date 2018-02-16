var express = require('express');
var app = express();
var session = require('express-session')
var bodyParser = require('body-parser')
var fighter = require('./routes/fighter')
var router = express.Router();
var port = process.env.PORT || 3000;
app.set('view engine', 'pug');
app.set('views', "views");


app.route('/')

    .get(function(req, res, next) {
      res.render('homepage', { title: 'Fight Express' });
    })

    .post(function(req, res) {
      res.render('player')
    });

router.get('/about', (req, res) => {
  res.render("About");
});

app.listen(port);
console.log('Youre now on localhost ' + port);

app.use('/', router);
app.use('/fighter', fighter);


module.exports = app
