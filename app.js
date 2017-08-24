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

  // setup game object if user isn't in game
  if (!req.session.game) {
    req.session.game = {};
    let game = req.session.game;
    game.inGame = true;
    game.isOver = false;
    game.word = data.pickWord();
    game.hiddenWord = data.hiddenWord(game.word);
    game.guessed = [];
    game.guessesLeft = 5;
    console.log(game.word);
  }
  console.log(req.session);
  res.render('index', req.session.game);
});

app.post('/guess', (req, res) => {
  let guess = req.body.guess;
  console.log(guess);

  data.checkGuess()

  req.session.game.guessed.push(guess);
  req.session.game.guessesLeft--;
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Successfully started express application!')
});
