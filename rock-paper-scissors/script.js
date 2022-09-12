const computerChoice = document.getElementById("computer-choice");
const myChoice = document.getElementById("my-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userTally;
let computerTally;

function generateRandom() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);

    if (randomNumber === 0) computerTally = "rock";
    else if (randomNumber === 1) computerTally = "paper";
    else computerTally = "scissors";

    computerChoice.innerHTML = computerTally;
}

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userTally = e.target.id;
    myChoice.innerHTML = userTally;
    generateRandom();

}))
