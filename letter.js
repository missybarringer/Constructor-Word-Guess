// Letter constructor
function Letter(letter) {
  this.letter = letter;
  this.guessed = false;

// string that represents the Word
  this.toString = function() {
    // prints the letter if guessed correctly with spaces between and sets guessed to true
    if (this.letter === " ") {
      this.guessed = true;
      return " ";
    } else {
      // prints the underscore if guessed is false else returns the letter
      if (this.guessed === false) {
        return "_";
      } else {
        return this.letter;
      }
    }
  };
  // function that takes a character as an argument & checks it against the underlying character
  // updates the guessed value to true if guessed correctly
  this.guess = function(guess) {
    if (guess === this.letter) {
      this.guessed = true;
    }
  };
}

module.exports = Letter;