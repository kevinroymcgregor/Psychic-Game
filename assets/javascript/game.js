let win = 0;
let loss = 0;
let guessesLeft = 9;
let guess;

function updateGuess(){
    const targetDiv = document.getElementById("currentGuesses");
    guessesLeft--
    targetDiv.textContent = guessesLeft;
}
