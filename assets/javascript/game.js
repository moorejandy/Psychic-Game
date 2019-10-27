//Create computer choices

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "g", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var randomChoice = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomChoice];
console.log(computerChoice);

//Create vars to hold the number of wins, losses, and already guessed
var wins = 0;
var losses = 0;
var attempts = 10;
var guessedLetters = [];

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("loss-text");
var guessCount = document.getElementById("guess-counter");
var guessAlready = document.getElementById("guess-already");
var userChoiceText = document.getElementById("user-choice");

document.onkeyup = function(event) {
    var userGuess = event.key;

    userChoiceText.textContent = "You chose: " + userGuess;
    guessAlready.append(userGuess);
    


if (attempts <= 0) {
    losses++;
    lossesText.textContent = "Losses: " + losses++;
    alert("You lost");
    attempts = 10;
    guessedLetters =[];
    guessAlready.textContent = guessedLetters;
    attempts.textContent = 10;
    randomChoice = Math.floor(Math.random() * alphabet.length);
    computerChoice = alphabet[randomChoice];
    console.log(computerChoice);

}

    if (computerChoice === userGuess) {
    wins++;
    alert("You Won!");
    winsText.textContent = "Wins: " + wins++;
    attempts = 10;
    guessedLetters =[];
    guessAlready.textContent = guessedLetters;
    attempts.textContent = 10;
    randomChoice = Math.floor(Math.random() * alphabet.length);
    computerChoice = alphabet[randomChoice];
    console.log(computerChoice);
}
    else {
        guessCount.textContent = "Remaining Guess: " + attempts;
        guessedLetters.push(guessAlready);
        attempts.textContent = "Guesses remaining" + attempts--;
        guessedLetters.push(userGuess);
        guessedLetters.textContent = guessedLetters;
        // guessAlready.innerHTML = guessAlready.innerHTML + userGuess;
       
}};
