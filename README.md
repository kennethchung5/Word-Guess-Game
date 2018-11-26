# Word-Guess-Game

This is a hangman-style game written in JavaScript. The game's content is stored as an array of word solutions, and its logic is handled by two major functions. The functions are written so that they dynamically construct and reveal the displayed word according to the word itself; the app makes minimal use of hardcoding. This means that expanding the game's content is as simple as adding words to the array of solutions; no other code needs to be written. 

The app chooses which images to display according to variable game conditions (the number of guesses remaining and whether the user successfully guessed the current word). This is accomplished with 
