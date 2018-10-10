// represent each word as an array

// primary game function has a word array as input
    // upon receiving word array, 
// on keyup event: 
    // check membership in allLetters array
    // check membership in guessedLetters array
    // loop through word array to match letter
        // on a hit, display letter and turn on switch var

        
//global, referenced in keyup event
var allLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var guessedLetters = [];
//global; each element (a word array) is passed to a function

var remainingGuesses = 10;

var score = 0;

var wordSet = [
    ["S","U","B","W","A","Y"]
    ["C","O","M","M","U","T","E"]

];



function test1() {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "letterDiv");
    document.getElementById("wordDisplay").appendChild(newDiv);

}

function test2(wordArray) {
    for (var i = 0; i < wordArray.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("class", "letterDiv");
        newDiv.setAttribute("id", "div" + i);
        document.getElementById("wordDisplay").appendChild(newDiv);

        // testing: can we dynamically refer to elements by id? 
        if (wordArray[i] == "A") {
            document.getElementById("div" + i).textContent = "A";
        }
    }

}

function setWord(wordArray) {
    for (var i = 0; i < wordArray.length; i++) {
        var letterBox = document.createElement("div");
        letterBox.setAttribute("class", "letterDiv");
        letterBox.id = "letterDiv" + i;
        document.getElementById("wordDisplay").appendChild(letterBox);
    }
}


//respond to keyup
document.onkeyup = function checkLetter(event) {
    var currentLetter = event.key.toUpperCase();
    var correctGuess = 0;

    // check that: 1.key is a letter and 2.key is not already guessed
    if (allLetters.indexOf(currentLetter) > -1 && guessedLetters.indexOf(currentLetter) === -1) {
        for (i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === currentLetter) {
                //reveal letter in the corresponding letterDiv
                document.getElementById("letterDiv" + i).textContent = currentLetter;
                // indicate that a correct guess was made: with a switch?
                correctGuess = 1;
            }

            //add currentLetter to guessedLetters array
            guessedLetters.push(currentLetter);
         
            //based on whether a correct guess was made, different functions/methods to execute. 
            if (correctGuess === 1); {
                //check whether more letters remain; if not, increase the score
                //to check for remainingLetters: (maybe) have a variable counter for "hits"; check when it equals wordArray.length
            }
            else {

            }
        }
    }
}
