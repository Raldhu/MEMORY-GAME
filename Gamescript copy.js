document.addEventListener('DOMContentLoaded', () =>{ 
    
    const cardsList = [
             "💐","🌹","🌻","🏵️","🌺","🌴","🌈","🍓","🍒","🍎","🍉","🍊","🥭","🍍","🍋","🍏","🍐","🥝","🍇","🥥","🍅","🌶️","🍄","🧅","🥦","🥑","🍔","🍕","🧁","🎂","🍬","🍩","🍫","🎈"
    ];
    
    
cardsList.sort( () =>0.5 - Math.random());
const grid = document.querySelector('.gamegrid');
const attemptsHolder = document.querySelector('.attemptholder');
const foundHolder = document.querySelector('.foundHolder');
const cardsInGame = 18;

 var attempts = 0;
 var foundCards = 0;
 foundHolder.textContent = foundCards;
attemptsHolder.textContent = attempt;

var chosenCards = [];
var chosenCardsIds = []

    function initiateBoard () { 
        for (var i = 0; i < cardsList.length; i++) {
    var card = document.createElement('img');
     card.setAttribute('src', 'images/placeholder.png'); 
     card.setAttribute('data-id', i); 
     card.addEventListener("click", flipCard);
     grid.appendChild(card);
        }
    }


    function flipCard() { 
        if(chosenCards.length != 2 )
        //to disable other clicks

        var cardid = this.getAttribute('data-id');

        //data-id: which card id we click
       
        if(this.getAttribute('src') != 'images/blank.png'){
        chosenCards.push(cardsList[cardid].name); 
        chosenCardsIds.push(cardid); 

        //that we are going to make the card flip itself 

        this.setAttribute("src", cardsList[cardId].image); 
        if (chosenCards.lenght == 2){
        setTimeout(checkForMatch, 400);
        }
    }


    function checkForMatch() {
        attempts++; 
        var cards = document.querySelectorAll('img '); 
        var firstCard = chosenCardsIds [0]; 
        var secondCard = chosenCardsIds [1];
        
      if (chosenCards [0] == chosenCards [1]) {
            foundCards++; 
            cards[firstCard].setAttribute('src', 'images/blank.png')
            cards[secondCard].setAttribute('src', 'images/blank.png')
        }
        else{
            cards[firstCard].setAttribute('src', 'images/placeholder.png')
             cards[secondCard].setAttribute('src', 'images/placeholder.png')
        }
    }

            
        chosenCards = [];
             chosenCardsIds = []; 
             attemptsHolder.textContent = attemps; 
             foundHolder.textContent = foundCards; 
             if(foundCards == cardsInGame) {
            alert( 'well done!')
             }
            }
            initiateBoard();
        })
