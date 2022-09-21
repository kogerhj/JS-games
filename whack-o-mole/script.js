const timeLeft = document.querySelector("#time-left");

const myScore = document.querySelector("#score");

const squares = document.querySelectorAll(".square");

const mole = document.querySelector(".mole");

let result = 0;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })
    
    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
}

randomSquare();