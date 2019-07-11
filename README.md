# Dog Breeds Hangman - Constructor-Word-Guess

## Contributors
@missybarringer
____________________________________
## Links
* [GitHub Repository Link](https://github.com/missybarringer/Constructor-Word-Guess.git)
* [Click here to View Constructor Word Guess App in action](http://www.webwabisabi.com/assets/media/CWG.mp4)
____________________________________
## Technology
* Command line game using Javascript and Constructors
* Inquirer (for user prompts) & chalk (for command line colors) NPM packages were used
____________________________________

## The Problem:
### Make a word guessing game using constructors for the CLI using Node.js for the backend

## The Solution:
### Created 3 javaScript files to handle the logic
* **Letter.js**: Contains a constructor, Letter. This constructor is able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor defines:

  * A string value to store the underlying character for the letter

  * A boolean value that stores whether that letter has been guessed yet

  * A function that returns the underlying character if the letter has been guessed, or an underscore if the letter has not been guessed

  * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor defines:

  * An array of `new` Letter objects representing the letters of the underlying word

  * A function that returns a string representing the word. This calls the function on each letter object that displays the character or an underscore and concatenates those together.

  * A function that takes a character as an argument and calls the guess function on each letter object

* **index.js**: This file contains the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses
____________________________________
## License
*This product is licensed under the MIT License (MIT).
____________________________________
## Contributing Guidelines
All contributions and suggestions are welcome!
For direct contributions, please fork the repository and file a pull request.
____________________________________
## Contact
* e-mail: barringer.margaret@gmail.com
* Twitter: @webwabisabi_com
* Instagram: @webwabisabi_com
* [WebWabiSabi website](www.webwabisabi.com)