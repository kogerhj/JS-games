const computerChoice = document.getElementById("computer-choice");
const myChoice = document.getElementById("my-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userTally;

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userTally = e.target.id;
    myChoice.innerHTML = userTally;
}))