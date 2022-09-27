const timeLeft = document.querySelector('#time-left');
const result = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');
let currentIndex = 76;
const gridWidth = 9;



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

