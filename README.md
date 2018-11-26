# Word-Guess-Game

https://kennethchung5.github.io/Word-Guess-Game/

This is a hangman-style game written in JavaScript. The game's content is stored as an array of word solutions, and its logic is handled by two major functions. The functions are written so that they dynamically construct and reveal the displayed word according to the word itself; the app makes minimal use of hardcoding. This means that expanding the game's content is as simple as adding words to the array of solutions; no other supporting code needs to be written. 

The app chooses which images to display according to variable game conditions (e.g. the number of guesses remaining). This is accomplished by selecting an <img> element and using a variable to dynamically construct its src attribute value. 

Some time after I finished this project, I learned of the JavaScript string .split() method. This method would have been useful for formatting the words as arrays of individual letters, something I previously did manually. 
