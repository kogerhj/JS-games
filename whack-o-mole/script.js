const timeLeft = document.querySelector("#time-left");

const myScore = document.querySelector("#score");

const squares = document.querySelectorAll(".square");

const mole = document/querySelector(".mole");

let result = 0;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })
}