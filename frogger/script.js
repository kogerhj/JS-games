const timeLeft = document.querySelector('#time-left');
const result = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');
let currentIndex = 76;
const gridWidth = 9;
const logsLeft = document.querySelectorAll('.logs-left')



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

function autoMoveLogs() {
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
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

setInterval(autoMoveLogs, 1000)

