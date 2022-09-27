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
        case "ArrowLeft": currentIndex--
            break
        case "ArrowRight": currentIndex++
            break
        case "ArrowUp": currentIndex -= gridWidth
            break
        case "ArrowDown": currentIndex += gridWidth
            break
    }
    //add frog class to new square
    squares[currentIndex].classList.add('frog')
}

document.addEventListener('keyup', moveFrog)

