const computerChoice = document.getElementById("computer-choice");
const myChoice = document.getElementById("my-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userTally;
let computerTally;
let result;

function generateRandom() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);

    if (randomNumber === 0) computerTally = "rock";
    else if (randomNumber === 1) computerTally = "paper";
    else computerTally = "scissors";
    computerChoice.innerHTML = computerTally;
    getResult();
}

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userTally = e.target.id;
    myChoice.innerHTML = userTally;
    generateRandom();

}))

function getResult() {
    if(computerTally === userTally) result = "It's a draw"
    else if(computerTally === 'rock' && userTally === 'paper')  result = "You win"
    else if(computerTally === 'rock' && userTally === 'scissors')  result = "You lost"
    else if(computerTally === 'paper' && userTally === 'rock')  result = "You lost"
    else if(computerTally === 'paper' && userTally === 'scissors')  result = "You win"
    else if(computerTally === 'scissors' && userTally === 'paper')  result = "You lost"
    else if(computerTally === 'scissors' && userTally === 'rock')  result = "You win"

    resultDisplay.innerHTML = result;
}
