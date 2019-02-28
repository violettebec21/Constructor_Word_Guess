var Letter = require("./letter");

//Contains a constructor, Word that depends on the Letter constructor. 

function Word(word){
    //creating letter array, using .map from ES6 to take in word and cycles throgh/"maps" for each letter
    this.letterArray = word.split("").map(letter => {
        return new Letter(letter)
    })

    // A function that returns a string representing the word. 
        //This should call the function on each letter object (the first function defined in `Letter.js`) 
        //that displays the character or an underscore and concatenate those together.

    this.toString = function (){
        return this.letterArray.map(letter => {
            return letter.toString();
        }).join(" ");

    }

//This is used to create an object representing the current word the user
//is attempting to guess. 
// Create a new object
        //* An array of `new` Letter objects representing the letters of the underlying word

}
var OB = new Word("horse");
console.log(OB);
console.log(OB.toString());

        // A function that returns a string representing the word. 
        
        //This should call the function on each letter object (the first function defined in `Letter.js`) 
        //that displays the character or an underscore and concatenate those together.


        // A function that takes a character as an argument 
        //and calls the guess function on each letter object (the second function defined in `Letter.js`)
