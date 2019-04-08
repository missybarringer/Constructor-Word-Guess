var Letter = require("./letter.js");  // Bring in the Letter constructor so we have the logic to analyze the guessed character.
var chalk  = require("chalk"); //allows us to change the font color of console.log responses

function Word(answer) {
  // Letter objects array
  this.objArray = [];
  // Iterate over each letter in Word and make each of them into a Letter object.
  // pushes the letters to the objArray
  for (var i = 0; i < answer.length; i++) {
    var letter = new Letter(answer[i]);
    this.objArray.push(letter);
  }
  // loops through the objArray & concatenates the letters & underscores to print to the console
  this.wordToGuess = function() {
    answerGuessed = "";
    for (var i = 0; i < this.objArray.length; i++) {
      answerGuessed += this.objArray[i] + " ";
    }
    console.log(chalk.cyan(answerGuessed) + "\n========================\n");
  };

  // takes the character as an argument & calls the guess function on each letter
  this.userGuess = function(input) {
    for (var i = 0; i < this.objArray.length; i++) {
      this.objArray[i].guess(input);
    }
  };
}

module.exports = Word;