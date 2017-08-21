const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const expressSession = require('express-session');

const data = require('./models/data.js');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(expressSession({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  
  if (!req.session.inGame) {
    req.session.inGame = true;
    req.session.word = data.pickWord;
  }
  console.log(req.session);
  res.render('index');
});

app.listen(3000, () => {
  console.log('Successfully started express application!')
});
