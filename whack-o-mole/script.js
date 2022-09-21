const timeLeft = document.querySelector("#time-left");

const myScore = document.querySelector("#score");

const squares = document.querySelectorAll(".square");

const mole = document.querySelector(".mole");

let result = 0;

let hitPosition;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })
    
    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
}

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 750);

}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result ++;
            myScore.textContent = result;
            hitPosition = null;
        }
    })
})

moveMole();

console.log(result);