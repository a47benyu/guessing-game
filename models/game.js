const game = {};
game.won = false;
game.guessed = [];
game.word;
game.hiddenWord;
game.maxGuesses = 8;
game.guessesLeft = this.maxGuesses;
game.wordList = [
  'tree',
  'ball',
  'city',
  'ocean',
  'house',
  'bird',
  'people',
  'table',
  'phone',
  'computer'
];

// returns an array of characters of a random word
game.pickWord = function() {
  this.word = this.wordList[getRandomInt(0, this.wordList.length)];
}

// returns an array of characters
// letters that have not been guessed are hidden with underscores
game.hideWord = function() {
  this.hiddenWord = this.word.split('').map(e => this.guessed.includes(e) ? e : '_');
}

game.guess = function(guess) {
  if (!this.guessed.includes(guess)) {
    this.guessed.push(guess);
    this.guessesLeft--;
    this.hideWord();
    this.gameWon = !this.hiddenWord.includes('_');
  }
}

game.newGame = function() {
  this.won = false;
  this.guessed = [];
  this.guessesLeft = this.maxGuesses;
  this.pickWord();
  this.hideWord();
}

game.isOver = function() {
  return this.guessesLeft <= 0 || !this.hiddenWord.includes('_');
}

module.exports = game;

// get a random integer between two values, max is non inclusive
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
