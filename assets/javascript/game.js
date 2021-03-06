// represent each word as an array

// primary game function has a word as input
    // upon receiving word, 
// on keyup event: 
    // check membership in allLetters array
    // check membership in guessedLetters array
    // loop through word (array) to match letter
        // on a hit, display letter and turn on switch var

                

//global variables
var allLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var score = 0;
var wordSet = [

    ["B","U","S"],
    ["C","O","M","M","U","T","E"],
    ["C","O","N","D","U","C","T","O","R"],
    ["C","O","N","N","E","C","T","I","O","N"],
    ["D","E","L","A","Y","E","D"],
    ["D","R","I","V","E","R"],
    ["E","X","P","R","E","S","S"],
    ["F","A","R","E"],
    ["L","I","M","I","T","E","D"],
    ["L","I","N","E"],
    ["L","O","C","A","L"],
    ["M","E","T","R","O","C","A","R","D"],
    ["P","A","S","S","E","N","G","E","R"],
    ["P","L","A","T","F","O","R","M"],
    ["R","A","I","L"],
    ["S","E","R","V","I","C","E"],
    ["S","H","U","T","T","L","E"],
    ["S","I","G","N","A","L"],
    ["S","T","A","T","I","O","N"],
    ["S","T","O","P"],
    ["S","T","R","A","P","H","A","N","G","E","R"],
    ["S","U","B","W","A","Y"],
    ["S","W","I","P","E"],
    ["T","E","R","M","I","N","A","L"],
    ["T","R","A","C","K"],
    ["T","R","A","I","N"],
    ["T","R","A","N","S","F","E","R"],
    ["T","R","A","N","S","I","T"],
    ["T","U","N","N","E","L"],
    ["T","U","R","N","S","T","I","L","E"],
    ["U","N","D","E","R","G","R","O","U","N","D"],
    ["U","N","L","I","M","I","T","E","D"]

];

var currentWord = [];
var guessedLetters = [];
var remainingGuesses;
var hitCount;
var livePlay = false;

var doorChime = new Audio("assets/sounds/Recording.m4a");


function setWord() {    

        // clear page (wordDisplay and guessedList)
        document.getElementById("wordDisplay").innerHTML = "";
        document.getElementById("guessedList").innerHTML = "";
        document.getElementById("resultText").innerHTML = "";

        if (wordSet.length === 0) {
            livePlay = false;

            document.getElementById("GuessNumberImg").setAttribute("src", "");
            document.getElementById("GuessNumberImg").setAttribute("alt", "");

            document.getElementById("resultImg").setAttribute("src", "assets/images/EndGame.PNG");
            document.getElementById("resultImg").setAttribute("alt", "Thanks for playing!");

            document.getElementById("pTop").textContent = "No more words!";
            document.getElementById("pBottom").textContent = "";
            document.getElementById("resultText").textContent = "Thanks for playing!";
        }
        else {
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
                letterBox.textContent = "__";
                document.getElementById("wordDisplay").appendChild(letterBox);
            };

            doorChime.play();

            // set Guess# to 7
            document.getElementById("GuessNumberImg").setAttribute("src", "assets/images/Guess7.PNG");
            document.getElementById("GuessNumberImg").setAttribute("alt", "7");
            document.getElementById("resultImg").setAttribute("src", "");
            document.getElementById("resultImg").setAttribute("alt", "");
            
            // initiate per-word variables
            guessedLetters = [];
            remainingGuesses = 7; 
            hitCount = 0;
            livePlay = true;
        };
    
};


//respond to keyup
document.onkeyup = function checkLetter(event) {

    if (event.keyCode === 13) {
        setWord();
    };

    // execute only if game is ready (livePlay is true). this prevents responding to keyups when game is in a certain state.
    if (livePlay) {
        var currentLetter = event.key.toUpperCase();        

        // check that: 1.key is a letter and 2.key is not already guessed
        if (allLetters.indexOf(currentLetter) > -1 && guessedLetters.indexOf(currentLetter) === -1) {
            var correctLetter = false;

            // loop through currentWord, check match against currentLetter
            for (var i = 0; i < currentWord.length; i++) {
                if (currentWord[i] === currentLetter) {
                    // reveal letter in the corresponding letterDiv
                    document.getElementById("letterDiv" + i).textContent = currentLetter;                
                    
                    hitCount += 1;
                    correctLetter = true;
                };
            }
                
            // add currentLetter to guessedLetters array
            guessedLetters.push(currentLetter);                        

            // add div for current letter to guessedList; style according to correctLetter
            var guessedLetterBox = document.createElement("div");

            guessedLetterBox.textContent = currentLetter;

            if (correctLetter) {
                guessedLetterBox.setAttribute("class", "greenLetter");
            }
            else {
                guessedLetterBox.setAttribute("class", "redLetter");
            };

            document.getElementById("guessedList").appendChild(guessedLetterBox);
            
            //based on whether a correct guess was made, different functions/methods to execute. 
            if (correctLetter) {
                //style this element in guessedLetters

                //check whether more letters remain; if not, increase the score
                if (hitCount === currentWord.length) {
                    livePlay = false;
                                        
                    // display win scenario
                    document.getElementById("resultText").textContent = "You guessed the word!";

                    //randomly choose Win# image; hardCode # of images
                    var n = Math.floor(Math.random() * 10)
                    document.getElementById("resultImg").setAttribute("src", "assets/images/Win" + n + ".PNG");
                    document.getElementById("resultImg").setAttribute("alt", "Nice!");

                    score += 1;
                    document.getElementById("scoreDisplay").textContent = "Score: " + score;
                };
            }
            else {
                remainingGuesses -= 1;

                document.getElementById("GuessNumberImg").setAttribute("src", "assets/images/Guess" + remainingGuesses + ".PNG");
                document.getElementById("GuessNumberImg").setAttribute("alt", remainingGuesses);

                if(remainingGuesses === 0) {
                    livePlay = false;

                    // display solution
                    for (var i = 0; i < currentWord.length; i++) {
                        document.getElementById("letterDiv" + i).textContent = currentWord[i];
                    };

                    // display loss scenario
                    document.getElementById("resultText").textContent = "You ran out of guesses!";

                    var n = Math.floor(Math.random() * 10);
                    document.getElementById("resultImg").setAttribute("src", "assets/images/Loss" + n + ".PNG");
                    document.getElementById("resultImg").setAttribute("alt", "You'll get the next one!");
                };
            };        
        };
    };
};
