const block = document.createElement('div');

const grid = document.querySelector('.grid');

const blockHeight = 20;
const blockWidth = 100;

//create Block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
}


//add block to grid
function addBlock() {
    block.classList.add('block');
    block.style.left = '100px';
    block.style.bottom = '50px';
    grid.appendChild(block);
}

addBlock();