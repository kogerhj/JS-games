const timeLeft = document.querySelector('#time-left');
const result = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');
let currentIndex = 0

function moveFrog() {
   squares[currentIndex].classList.add('frog')
}

document.addEventListener('keyup', moveFrog)