const grid = document.querySelector('.grid');
const userStart = [250, 10];
let currentPosition = userStart;
let scoreDisplay = document.querySelector('#score');
const blockHeight = 20;
const blockWidth = 100;
const boardWidth = 600;
const boardHeight = 300;
let ballStart = [290, 30];
const ballDiameter = 20;
let xDirection = 2;
let yDirection = 2;
let ballCurrentPosition = ballStart;
let timerId;
let score = 0;

//create Block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

//all my blocks
const blocks = [
    new Block(10, 270),
    new Block(130, 270),
    new Block(250, 270),
    new Block(370, 270),
    new Block(490, 270),
    new Block(10, 230),
    new Block(130, 230),
    new Block(250, 230),
    new Block(370, 230),
    new Block(490, 230),
    new Block(10, 190),
    new Block(130, 190),
    new Block(250, 190),
    new Block(370, 190),
    new Block(490, 190),

]


// add all blocks to grid
function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div');
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'
        grid.appendChild(block)

    }
}

addBlocks();

//add user
const user = document.createElement('div');
user.classList.add('user');
drawUser();
grid.appendChild(user);


//draw user
function drawUser() {
    user.style.left = currentPosition[0] + "px";
    user.style.bottom = currentPosition[1] + "px";
}

//move user
function moveUser(e) {
    switch (e.key) {
        case "ArrowLeft":
            if (currentPosition[0] > 0) {
                currentPosition[0] -= 10
                drawUser()
                break;
            }
        case "ArrowRight":
            if (currentPosition[0] < boardWidth - blockWidth) {
                currentPosition[0] += 10
                drawUser()
                break;
            }
    }
}

document.addEventListener('keydown', moveUser);

//draw ball
function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px';
    ball.style.bottom = ballCurrentPosition[1] + 'px';
}


//add ball
const ball = document.createElement('div');
ball.classList.add('ball');
grid.appendChild(ball);
drawBall();

//move ball
function moveBall() {
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    checkForCollisions();
    drawBall();
}

timerId = setInterval(moveBall, 30);

//change for collisions 
function checkForCollisions() {
    //check for block collisions
    for (let i = 0; i < blocks.length; i++) {
        if ((ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
            ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1])) {
            const allBlocks = Array.from(document.querySelectorAll('.block'))
            allBlocks[i].classList.remove('block')
            blocks.splice(i, 1)
            changeDirection()
            score++
            scoreDisplay.textContent = score

            //check for win
            if (blocks.length === 0) {
                scoreDisplay.textContent = 'You win!'
                clearInterval(timerId)
                removeEventListener('keydown', moveUser)
            }
        }
    }

    //check for wall collisions
    if (
        ballCurrentPosition[0] >= (boardWidth - ballDiameter) ||
        ballCurrentPosition[1] >= (boardHeight - ballDiameter) ||
        ballCurrentPosition[0] <= 0
    ) {
        changeDirection();
    }
    //check for game over
    if (ballCurrentPosition[1] <= 0) {
        clearInterval(timerId);
        scoreDisplay.textContent = 'You Lose';
        removeEventListener('keydown', moveUser);
    }

    //check for user collisions
    if ((ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
        ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight) {
        changeDirection()
    }

}

// check for game over
// if(ballCurrentPosition[1] <= 0) {
//     clearInterval(timerId);
//     scoreDisplay.textContent('You lose');
//     removeEventListener('keydown', moveUser);
// }


function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2;
        return;
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2;
        return;
    }
    if (xDirection === -2 && yDirection === -2) {
        yDirection = 2;
        return;
    }
    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2;
        return;
    }
}


