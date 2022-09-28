const timeLeft = document.querySelector('#time-left');
const result = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');
let currentIndex = 76;
const gridWidth = 9;
const logsLeft = document.querySelectorAll('.logs-left');
const logsRight = document.querySelectorAll('.logs-right');
const carsLeft = document.querySelectorAll('.car-left');
const carsRight = document.querySelectorAll('.car-right');
let timerId;


function moveFrog(e) {
    //remove frog class from previous square
    squares[currentIndex].classList.remove('frog')

    switch (e.key) {
        case "ArrowLeft":
            if (currentIndex % gridWidth != 0) currentIndex--
            break
        case "ArrowRight":
            if (currentIndex % gridWidth < gridWidth - 1) currentIndex++
            break
        case "ArrowUp":
            if (currentIndex - gridWidth >= 0) currentIndex -= gridWidth
            break
        case "ArrowDown":
            if (currentIndex + gridWidth < gridWidth * gridWidth) currentIndex += gridWidth
            break
    }
    //add frog class to new square
    squares[currentIndex].classList.add('frog')
}

document.addEventListener('keyup', moveFrog)

function moveElements() {
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
    logsRight.forEach(logRight => moveLogRight(logRight))
    carsLeft.forEach(carLeft => moveCarsLeft(carLeft))
    carsRight.forEach(carRight => moveCarsRight(carRight))
    checkForLose()
    checkForWin()
}

//move logs to the left
function moveLogLeft(logLeft) {
    switch (true) {
        case logLeft.classList.contains('l1'):
            logLeft.classList.remove('l1')
            logLeft.classList.add('l2')
            break
        case logLeft.classList.contains('l2'):
            logLeft.classList.remove('l2')
            logLeft.classList.add('l3')
            break
        case logLeft.classList.contains('l3'):
            logLeft.classList.remove('l3')
            logLeft.classList.add('l4')
            break
        case logLeft.classList.contains('l4'):
            logLeft.classList.remove('l4')
            logLeft.classList.add('l5')
            break
        case logLeft.classList.contains('l5'):
            logLeft.classList.remove('l5')
            logLeft.classList.add('l1')
            break
    }
}

function moveLogRight(logRight) {
    switch (true) {
        case logRight.classList.contains('l1'):
            logRight.classList.remove('l1')
            logRight.classList.add('l5')
            break
        case logRight.classList.contains('l5'):
            logRight.classList.remove('l5')
            logRight.classList.add('l4')
            break
        case logRight.classList.contains('l4'):
            logRight.classList.remove('l4')
            logRight.classList.add('l3')
            break
        case logRight.classList.contains('l3'):
            logRight.classList.remove('l3')
            logRight.classList.add('l2')
            break
        case logRight.classList.contains('l2'):
            logRight.classList.remove('l2')
            logRight.classList.add('l1')
            break

    }
}

function moveCarsRight(carRight) {
    switch (true) {
        case carRight.classList.contains('c1'):
            carRight.classList.remove('c1')
            carRight.classList.add('c3')
            break
        case carRight.classList.contains('c3'):
            carRight.classList.remove('c3')
            carRight.classList.add('c2')
            break
        case carRight.classList.contains('c2'):
            carRight.classList.remove('c2')
            carRight.classList.add('c1')
            break

    }

}

function moveCarsLeft(carLeft) {
    switch (true) {
        case carLeft.classList.contains('c1'):
            carLeft.classList.remove('c1')
            carLeft.classList.add('c2')
            break
        case carLeft.classList.contains('c2'):
            carLeft.classList.remove('c2')
            carLeft.classList.add('c3')
            break
        case carLeft.classList.contains('c3'):
            carLeft.classList.remove('c3')
            carLeft.classList.add('c1')
            break
    }
}

//check for failing game
function checkForLose() {
    if (
        squares[currentIndex].classList.contains('c1') ||
        squares[currentIndex].classList.contains('l4') ||
        squares[currentIndex].classList.contains('l5')) {
        result.textContent = "You Lose!"
        clearInterval(timerId)
        squares[currentIndex].classList.remove('frog')
        document.removeEventListener('keyup', moveFrog)

    }
}

function checkForWin() {
    if (squares[currentIndex].classList.contains('ending-block')) {
        clearInterval(timerId)
        result.textContent = "You win!"
        document.removeEventListener('keyup', moveFrog)
    }
}

timerId = setInterval(moveElements, 1000)


