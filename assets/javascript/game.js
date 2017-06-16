// Define letters as array that computer can pick
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Set the global variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
// whatUserGuessed is an array that will hold all the user's guesses in each round
var whatUserGuessed = [];
// userGuess is what the user picks by pressing a key
var userGuess = null;
// Computer pick a letter and store it in variable
var computerGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + whatUserGuessed + " Computer picked: " + computerGuessed);

// when user press a letter, execute this function
document.onkeyup = function(event) {

    // When user presses a key, it records it and saves to userGuess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // Add the user's guess to whatUserGuessed array but 
    // only if it wasn't already previously picked by the user
    // also make sure that the character user picks is within
    // the alphabet array, and not any non-usable character
    if (whatUserGuessed.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
        whatUserGuessed[whatUserGuessed.length]=userGuess;
        // if it is a new letter then decrease remaining guesses by 1
        guessesLeft--;
    }

    // if computerGuessed is same as userGuess then record it as a win
    // and then reset guessesLeft to 10, and empty the whatUserGuessed array
    // also have the computer make a new random pick
    if (computerGuessed == userGuess) {
        wins++;
        console.log("You won!");
        alert("You won!")
        guessesLeft = 10;
        whatUserGuessed = [];
        computerGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + whatUserGuessed + " Computer picked: " + computerGuessed);
    }

    // if guessesLeft gets to 0 then record it as a loss
    // and then reset guessesLeft to 10, and empty the whatUserGuessed array
    // also have the computer make a new random pick
    if (guessesLeft == 0) {
        losses++;
        console.log("You lose!");
        alert("You lose! Let's Play Again!")
        guessesLeft = 10;
        whatUserGuessed = [];
        computerGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + whatUserGuessed + " Computer picked: " + computerGuessed);
    }

    // Displaying progress to HTML
    var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter Computer is thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + whatUserGuessed + "</h4></p>";
    // place html into the game ID
    document.querySelector("#game").innerHTML = html;

}