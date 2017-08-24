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

// returns an array of chars representing the hidden word
function getHiddenWord(str) {
  let hidden = [];

  for (let i = 0; i < str.length; i++) {
    hidden.push('_');
  }
  return hidden;
}

function checkGuess(word, letter) {
  if (word.includes(letter)) {
    return word.replace(/letter/g, )
  }
}

module.exports = {
  pickWord: pickWord,
  hiddenWord: getHiddenWord
};
