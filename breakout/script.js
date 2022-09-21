const block = document.createElement('div');

const grid = document.querySelector('.grid');

function addBlock() {
    block.classList.add('block');
    block.style.left = '100x';
    block.style.bottom = '50px';
    grid.appendChild(block);
}

addBlock();