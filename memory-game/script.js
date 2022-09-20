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

const resultDisplay = document.querySelector("#result");

let cardsChosen = [];

let cardsChosenIds = [];

let numMatches = [];

const myScore = document.querySelector('#result');


function checkMatch() {
    const cards = document.querySelectorAll("#grid img")
    const cardOneId = cardsChosenIds[0];
    const cardTwoId = cardsChosenIds[1];

    if(cardOneId == cardTwoId) {
        alert("You clicked the same image!")
    }

    if(cardsChosen[0] === cardsChosen[1]) {
        alert("You found a match!")
        cards[cardOneId].setAttribute('src', 'images/white.svg')
        cards[cardTwoId].setAttribute('src', 'images/white.svg')
        cards[cardOneId].removeEventListener('click', flipCard)
        cards[cardTwoId].removeEventListener('click', flipCard)
        numMatches.push(cardsChosen);


    } else {
        cards[cardOneId].setAttribute('src', 'images/question-mark.png')
        cards[cardTwoId].setAttribute('src', 'images/question-mark.png')
        alert("Sorry, try again")
    }

    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.innerHTML = numMatches.length;

    if(numMatches.length === cardArray.length/2) {
        resultDisplay.innerHTML = "You found all matches!"
    }
}

function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/question.svg')
        card.setAttribute('data-id', i)
        gridDisplay.append(card);
        card.addEventListener('click', flipCard)
    }
}

createBoard();


