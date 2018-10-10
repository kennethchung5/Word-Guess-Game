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

//global; each element (a word array) is passed to a function
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
        if (wordArray[i] == "A") {
            document.getElementById("div" + i).textContent = "A";
        }
    }

}

