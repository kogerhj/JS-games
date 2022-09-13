const cardArray = [
    {
        name: 'apple',
        img: 'images/apple.svg',
    },

    {
        name: 'banana',
        img: 'images/banana.svg',
    },

    {
        name: 'cantaloupe',
        img: 'images/cantaloupe.svg',
    },

    {
        name: 'citron-citrus',
        img: 'images/citron-citrus.svg',
    },

    {
        name: 'pear',
        img: 'images/pear.svg',
    },

    {
        name: 'plum',
        img: 'images/plum.svg',
    },

    {
        name: 'apple',
        img: 'images/apple.svg',
    },

    {
        name: 'banana',
        img: 'images/banana.svg',
    },

    {
        name: 'cantaloupe',
        img: 'images/cantaloupe.svg',
    },

    {
        name: 'citron-citrus',
        img: 'images/citron-citrus.svg',
    },

    {
        name: 'pear',
        img: 'images/pear.svg',
    },

    {
        name: 'plum',
        img: 'images/plum.svg',
    },
]

cardArray.sort(() => 0.5 - Math.random());
 
const gridDisplay = document.querySelector('#grid');

function createBoard() {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/question-mark.png')
        card.setAttribute('data-id', i)
        console.log(card, i);
        gridDisplay.append(card);

    }
}

createBoard();