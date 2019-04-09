// added to portfolio at https://missybarringer.github.io/ & www.webwabisabi.com

var Word = require("./word.js"); // This contains the Word constructor
var inquirer = require("inquirer"); // npm package inquirer to receive user input
var chalk    	 = require("chalk"); // allows us to change the font color of console.log responses

// letters entry
var letterArray = "abcdefghijklmnopqrstuvwxyz";

// List of Dog breeds words to choose from
var dogBreeds = [
  "afghan hound",
  "boxer",
  "chow chow",
  "poodle",
  "corgi",
  "great dane",
  "dalmation",
  "greyhound",
  "scottish terrier"
];

// Pick Random index from dogBreeds array
var randomIndex = Math.floor(Math.random() * dogBreeds.length);
var randomWord = dogBreeds[randomIndex];

// Pass random word through Word constructor
var computerWord = new Word(randomWord);

var requireNewWord = false;

// Array for guessed letters
var incorrectLetters = [];
var correctLetters = [];

// Guesses left
var guessesLeft = 10;

console.log(chalk.cyan.bold("\n***Play Dog Breeds Hangman***\n"));
function startGame() {
  // Generates new word for Word constructor if requireNewWord is true
  if (requireNewWord) {
    // Selects random dogBreeds array
    var randomIndex = Math.floor(Math.random() * dogBreeds.length);
    var randomWord = dogBreeds[randomIndex];

    // Passes random word through the Word constructor
    computerWord = new Word(randomWord);

    requireNewWord = false;
  }

  // call the completeCheck function to determine if the word is completed or not
  var wordComplete = [];
  computerWord.objArray.forEach(completeCheck);

  // letters remaining to be guessed
  if (wordComplete.includes(false)) {
    inquirer
      .prompt([
        {
          type: "input",
          message: chalk.magenta("Guess a letter between A-Z! "),
          name: "userinput"
        }
      ])
      .then(function(input) {
        // if no input or more than one letter entered ask the user to try again
        if ( !letterArray.includes(input.userinput) || input.userinput.length > 1 ) 
        {
          console.log(chalk.magenta("\nPlease try again!\n"));
          startGame();
        } else {
          // if letter has already been guessed or nothing was entered
          if ( incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === "" )
          {
            console.log(chalk.magenta("\nAlready Guessed or Nothing Entered\n"));
            startGame();
          } else {
            // Checks if guess is correct
            var wordCheckArray = [];
            computerWord.userGuess(input.userinput);
            
            // Checks if guess is correct or not & logs the appropriate response
            computerWord.objArray.forEach(wordCheck);
            if (wordCheckArray.join("") === wordComplete.join("")) {
              console.log(chalk.yellow("\nIncorrect...\n"));
              
              incorrectLetters.push(input.userinput);
              // subtracts 1 from the guessesLeft if incorrect letter is choosen
              guessesLeft--;
            } else {
              console.log(chalk.yellow("\nCorrect!\n"));
              
              correctLetters.push(input.userinput);
            }

            // prints the user inputted guess so far
            computerWord.wordToGuess();

            // Print guesses left
            console.log("Guesses Left: " + guessesLeft + "\n");

            // Print letters guessed already
            console.log(
              "Letters Guessed: " + incorrectLetters.join(" ") + "\n"
            );

            // if Guesses left are not all used up
            if (guessesLeft > 0) {
              // Call function to keep playing
              startGame();
            } else {
              console.log(chalk.black.bgWhite.bold("Sorry, you lose!\n"));

              restartGame();
            }

            function wordCheck(key) {
              wordCheckArray.push(key.guessed);
            }
          }
        }
      });
  } else {
    console.log(chalk.black.bgGreen.bold("YOU WIN!\n"));

    restartGame();
  }

  function completeCheck(key) {
    wordComplete.push(key.guessed);
  }
}

function restartGame() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to:",
        choices: ["Play Again", "Exit"],
        name: "restart"
      }
    ])
    .then(function(input) {
      if (input.restart === "Play Again") {
        requireNewWord = true;
        incorrectLetters = [];
        correctLetters = [];
        guessesLeft = 10;
        startGame();
      } else {
        return;
      }
    });
}

startGame();