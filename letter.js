// constructor function used to create letters objects
function Letter(letter) {
    this.letter = letter;
    this.isFound = false;
    //A function that returns the underlying character if the letter has been guessed
    //or a placeholder (like an underscore) if the letter has not been guessed
    this.toString = function () {
        // A boolean value that stores whether that letter has been guessed yet
        //A string value to store the underlying character for the letter
        //using ternary operator to accomplish both 
        return this.isFound ? this.letter : "_"
        
        // A function that takes a character as an argument 
        //and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    }
    this.checker = function (guess) {
        this.isFound = guess === this.letter;
    }
}

var Object1 = new Letter("h");
console.log(Object1);
console.log(Object1.toString());
Object1.checker("h");
console.log(Object1);
console.log(Object1.toString());

module.exports = Letter;
