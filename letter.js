// constructor function used to create letters objects
function Letter(letter, guess, placeholder) {
    this.letter = letter;
    this.guess = guess;
    this.placeholder = placeholder;
    //A function that returns the underlying character if the letter has been guessed
    //or a placeholder (like an underscore) if the letter has not been guessed
    this.toString = function () {
        // A boolean value that stores whether that letter has been guessed yet
        if (this.guess = true) {
            console.log(this.letter)
        } else { 
            //A string value to store the underlying character for the letter
            console.log("_");

// A function that takes a character as an argument 
//and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
        }
    }
}