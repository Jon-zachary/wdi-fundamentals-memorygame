//create the cards array
var cards = ["queen","queen","king","king"];
//create an empty array to hold the clicked cards
var cardsInPlay = [];
//assign the element with the gameboard class to a variable
var gameBoard = document.getElementById('game-board');
//define function to fill the cards array
var createCards = function() {
	for(var i=0;i<cards.length;i++){
    //create a card with a class div
		var aCard=document.createElement('div');
    //set the cards class attribute to 'card' for styling
		aCard.setAttribute('class','card');
    //set the cards 'data-card' attribute to the name of the card in card[i]
		aCard.setAttribute('data-card',cards[i]);
		// aCard.addEventListener('click',isTwoCards)
    aCard.addEventListener('click',isTwoCards);
    //append card to the game board
		gameBoard.appendChild(aCard);
	}
}


var isTwoCards = function() {
  //add clicked card to cardsInPlay array
  cardsInPlay.push(this.getAttribute('data-card'));
  //show image once card is clicked
  if(this.getAttribute('data-card')==='king'){
    this.innerHTML = '<img src="king.jpg" alt="King of hearts" />'
  } else {
    this.innerHTML = '<img src="queen.jpg" alt="Queen of hearts" />'
  }
  // if you have two cards run the isMatch function
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
  }
}
function isMatch(cards) {
  // alert winning message
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}
createCards();

