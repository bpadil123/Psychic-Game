var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var numberOfWins = 0;
var numberOfLosses = 0;
var wrongGuessesArray = []; //Need to be documented upon else
var guessesLeft = 10; //Need a count down
var userGuessed = "";
//This is my random letter generator

//Wins updater


var randomIndex = Math.floor(Math.random() * alphabet.length);
var randomLetter = alphabet[randomIndex];
console.log(randomLetter);


//This is my user input section
// object.addEventListener("keydown", compareInputs);
document.onkeyup = function (event) {
    document.querySelector("#message").innerText = "";

    // console.log(event)
    userGuessed = event.key;
    compareInputs(userGuessed, randomLetter)

}


//reset funciton:
function resetVars() {
    guessesLeft = 10;
    userGuessed = "";
    wrongGuessesArray = [];
    randomIndex = Math.floor(Math.random() * alphabet.length);
    randomLetter = alphabet[randomIndex];
}



function compareInputs(userGuessed, randomLetter) {
    if (userGuessed === randomLetter) {

        numberOfWins++;
        document.querySelector("#wins").innerText = numberOfWins;
        resetVars();
        document.querySelector("#message").innerText = "Good Job, you Won! Play again";

    } else {
        //count down from guessLeft
        guessesLeft--;
        document.querySelector("#guesses").innerText = guessesLeft;
        if (guessesLeft === 0) {
            document.querySelector("#message").innerText = "You are out of Guesses";
            numberOfLosses++;
            document.querySelector("#losses").innerText = numberOfLosses

resetVars();
        }
        //.document write the guess to wrongGuess
        if (wrongGuessesArray.indexOf(userGuessed)===-1){
            wrongGuessesArray.push(userGuessed);
            document.querySelector("#wrongguess").innerText = wrongGuessesArray;
        }
       

    }
}