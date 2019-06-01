let win = 0;
let loss = 0;
let guessesLeft = 9;
let guess;
const letterArray = ["a", "b", "c", "d", "e", "f", "g", 
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function updateLetter(){
    letter = letterArray[Math.floor(Math.random() * 26)];
}

function updateGuess(){
    const targetDiv = document.getElementById("guessesLeft");
    guessesLeft--;
    targetDiv.textContent = guessesLeft;
    guessList();
}

function resetGuess(){
    guessesLeft = 9;
    let targetDiv = document.getElementById("guessesLeft");
    targetDiv.textContent = guessesLeft;
    targetDiv = document.getElementById("currentGuesses");
    targetDiv.textContent = "";
}

function winFunc(){
    alert("Correct!");
    resetGuess();
    updateLetter();
    win++;
    const targetDiv = document.getElementById("wins");
    targetDiv.textContent = win;
}

function lossFunc(){
    resetGuess();
    updateLetter();
    loss++;
    const targetDiv = document.getElementById("losses");
    targetDiv.textContent = loss;
    alert("Out of guesses!");
}

function guessList(){
    const targetDiv = document.getElementById("currentGuesses");
    targetDiv.textContent = targetDiv.textContent + " " + event.key;
    // const newDiv = document.createElement("div");
    // newDiv.textContent = event.key;
    // targetDiv.appendChild(newDiv);
}