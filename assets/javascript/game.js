let win = 0;
let loss = 0;
let guessesLeft = 9;
let guess;

function updateGuess(){
    const targetDiv = document.getElementById("guessesLeft");
    guessesLeft--;
    targetDiv.textContent = guessesLeft;
}

function resetGuess(){
    guessesLeft = 9;
    const targetDiv = document.getElementById("guessesLeft");
    targetDiv.textContent = guessesLeft;
}
