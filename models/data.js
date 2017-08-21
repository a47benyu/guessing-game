const words = [
  'ball',
  'city',
  'ocean',
  'utilities',
  'conviction'
];

// returns a random word from the words array
function pickWord() {
  return words[getRandomInt(0, words.length)];
}

// get a random integer between two values, max is non inclusive
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
  pickWord: pickWord,

};
