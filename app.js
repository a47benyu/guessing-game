const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const expressSession = require('express-session');
const Game = require('./models/game.js');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(expressValidator());
app.use(expressSession({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  if (!req.session.game) {
    req.session.game = Game;
    Game.newGame();
  }

  res.render('index', Game);
});

app.get('/gameEnd', (req, res) => {
  res.render('gameEnd', Game);
  Game.newGame();
});

app.post('/guess', (req, res) => {
  req.checkBody("guess", "Enter a character.").notEmpty();
  req.checkBody("guess", " You guess must be a letter.").isAlpha();
  Game.errors = req.validationErrors();

  if (!Game.errors) {
    let guess = req.body.guess.toLowerCase();
    Game.guess(guess);
  }

  res.redirect(Game.isOver() ? '/gameEnd' : '/');
});

app.listen(3000, () => {
  console.log('Successfully started express application!')
});
