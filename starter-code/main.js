// create the cards array
const cards = ['queen', 'queen', 'king', 'king'];
// create an empty array to hold the clicked cards
let cardsInPlay = [];
// assign the element with the gameboard class to a variable
const gameBoard = document.getElementById('game-board');
// define function to fill the cards array

function resetBoard() {
  const usedCards = document.querySelectorAll('.card');
  for (let i = 0; i < usedCards.length; i += 1) {
    usedCards[i].innerHTML = '';
  }
}


function isMatch(twocards) {
  // alert winning message
  setTimeout(function () {
    if (twocards[0] === twocards[1]) alert('You found a match!');
    else alert('Sorry, try again.');
    resetBoard();
  }, 500);
}

function isTwoCards() {
  // add clicked card to cardsInPlay array
  cardsInPlay.push(this.getAttribute('data-card'));
  // show image once card is clicked
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = '<img src="king.jpg" alt="King of hearts" />';
  } else {
    this.innerHTML = '<img src="queen.jpg" alt="Queen of hearts" />';
  }
  // if you have two cards run the isMatch function
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
  }
}


function createCards() {
  for (let i = 0; i < cards.length; i += 1) {
    // create a card with a class div
    const aCard = document.createElement('div');
    // set the cards class attribute to 'card' for styling
    aCard.setAttribute('class', 'card');
    // set the cards 'data-card' attribute to the name of the card in card[i]
    aCard.setAttribute('data-card', cards[i]);
    // aCard.addEventListener('click',isTwoCards)
    aCard.addEventListener('click', isTwoCards);
    // append card to the game board
    gameBoard.appendChild(aCard);
  }
}

createCards();

