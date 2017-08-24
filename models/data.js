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
  return words[getRandomInt(0, words.length)];
}

// returns an array of chars representing the hidden word
// function revealGuessed(word, guessed) {
//
//   let hidden = [];
//
//   for (let i = 0; i < word.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (word.charAt(i) === guessed[i]) {
//         hidden.push(word.charAt(i));
//       };
//     }
//   }
//   return hidden;
// }

function hideWord(word, guessed) {
  for (let i = 0; i < word.length; i++) {
    if (!guessed.includes(word.charAt(i))) {
      word.replace(/./, '_ ');
    }
  }
  return word;
}



module.exports = {
  pickWord: pickWord,
  hideWord: hideWord
};
