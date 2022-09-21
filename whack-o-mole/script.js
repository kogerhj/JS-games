const timeLeft = document.querySelector("#time-left");

const myScore = document.querySelector("#score");

const squares = document.querySelectorAll(".square");

const mole = document.querySelector(".mole");

let currentTime = 5;

let result = 0;

let hitPosition;

let timerId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })
    
    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
}

function moveMole() {
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

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert("Game over! You're final score is " + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)