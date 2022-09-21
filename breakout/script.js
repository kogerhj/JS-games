const grid = document.querySelector('.grid');

const blockHeight = 20;
const blockWidth = 100;

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