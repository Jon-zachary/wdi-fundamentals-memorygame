var cardOne="queen";
var cardTwo="queen";
var cardThree="king";
var cardFour="king";

// if(cardOne===cardTwo){
// 	alert('You found a match!')
// } else {
// 	alert('Sorry, try again.')
// }
var gameBoard = document.getElementById('game-board');
var createCards = function() {
	for(var i=0;i<4;i++){
		var acard=document.createElement('div');
		acard.setAttribute('class','card');
		gameBoard.appendChild(acard);
	}
}
createCards();
