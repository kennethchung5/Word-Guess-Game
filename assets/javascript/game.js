// represent each word as an array

// primary game function has a word as input
    // upon receiving word, 
// on keyup event: 
    // check membership in allLetters array
    // check membership in guessedLetters array
    // loop through word (array) to match letter
        // on a hit, display letter and turn on switch var

        

// function test1() {
//     var newDiv = document.createElement("div");
//     newDiv.setAttribute("class", "letterDiv");
//     document.getElementById("wordDisplay").appendChild(newDiv);

// }

// function test2(currentWord) {
//     for (var i = 0; i < currentWord.length; i++) {
//         var newDiv = document.createElement("div");
//         newDiv.setAttribute("class", "letterDiv");
//         newDiv.setAttribute("id", "div" + i);
//         document.getElementById("wordDisplay").appendChild(newDiv);

//         // testing: can we dynamically refer to elements by id? 
//         if (currentWord[i] == "A") {
//             document.getElementById("div" + i).textContent = "A";
//         }
//     }

// }

        

//global, referenced in keyup event
var allLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


//global
var score = 0;
var wordSet = [
    ["S","U","B","W","A","Y"],
    ["C","O","M","M","U","T","E"]

];

var currentWord = [];
var guessedLetters = [];
var remainingGuesses;
var hitCount;
var livePlay = 0;

function setWord() {
    // check to see if words remain (i.e. wordSet not empty)

    // clear page (wordDisplay and guessedList)
    document.getElementById("wordDisplay").innerHTML = "";
    document.getElementById("guessedList").innerHTML = "";

    // pick word from wordSet
    var randomIndex = Math.floor(Math.random() * wordSet.length);
    currentWord = wordSet[randomIndex];


    // remove from array
    wordSet.splice(randomIndex, 1);

    // set word in display
    for (var i = 0; i < currentWord.length; i++) {
        var letterBox = document.createElement("div");
        letterBox.setAttribute("class", "letterDiv");
        letterBox.id = "letterDiv" + i;
        document.getElementById("wordDisplay").appendChild(letterBox);
    };

    // initiate per-word variables?
    guessedLetters = [];
    remainingGuesses = 10; 
    hitCount = 0;
    livePlay = 1;
};


//respond to keyup
document.onkeyup = function checkLetter(event) {
    // execute only if game is ready (livePlay === 1). this prevents responding to keyups when game is in a certain state.
    if (livePlay === 1) {
        var currentLetter = event.key.toUpperCase();        

        // check that: 1.key is a letter and 2.key is not already guessed
        if (allLetters.indexOf(currentLetter) > -1 && guessedLetters.indexOf(currentLetter) === -1) {
            var correctLetter = 0;

            // loop through currentWord, check match against currentLetter
            for (i = 0; i < currentWord.length; i++) {
                if (currentWord[i] === currentLetter) {
                    // reveal letter in the corresponding letterDiv
                    document.getElementById("letterDiv" + i).textContent = currentLetter;                
                    
                    hitCount += 1;
                    correctLetter = 1;
                };
            }
                
            // add currentLetter to guessedLetters array
            guessedLetters.push(currentLetter);
            // additionally: display in guessedList
            document.getElementById("guessedList").textContent = guessedLetters;
            
            //based on whether a correct guess was made, different functions/methods to execute. 
            if (correctLetter === 1) {
                //style this element in guessedLetters

                //check whether more letters remain; if not, increase the score
                if (hitCount === currentWord.length) {
                    score += 1;

                    livePlay = 0;
                    // add event for setword? maybe: call a function into solved state
                    // setWord();
                };
            }
            else {
                remainingGuesses -= 1;

                if(remainingGuesses === 0) {
                    livePlay = 0;
                    // add event for setword? maybe: call a function into solved state
                    // setWord();
                };
            };        
        };
    };
};
