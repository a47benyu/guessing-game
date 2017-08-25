const words = [
  'ball',
  'city',
  'ocean',
  'utilities',
  'conviction'
];

// get a random integer between two values, max is non inclusive
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// returns an array of characters of a random word
function pickWord() {
  return words[getRandomInt(0, words.length)].split('');
}

// returns an array of characters
// letters that have not been guessed are hidden with underscores
function hideWord(word, guessed) {
  return word.map( e => {
    if (!guessed.includes(e))
      return '_';
    return e;
  });
}

module.exports = {
  pickWord: pickWord,
  hideWord: hideWord
};
