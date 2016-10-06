////////// Deck ////////

function Deck()
{
  // private properties
  const NUM_CARDS = 52;
  var cards = [];

  var suitType = {
    1 : "Clubs",
    2 : "Diamonds",
    3 : "Hearts",
    4 : "Spades"
  }

  // private methods

  // Each card is represented by an array.
  // First item in that array is the card value (1-13), second item is the suit (1-4).
  var initDeck = function() {
    for(var i = 0; i < NUM_CARDS; i++)
    {
      if(i < 13) // Clubs
        cards[i] = [i + 1, 1];
      else if (i > 12 && i < 26) // Diamonds
        cards[i] = [i - 12, 2]
      else if (i > 25 && i < 39) // Hearts
        cards[i] = [i - 25, 3]
      else
        cards[i] = [i - 38, 4] // Spades
    }
  }

  // public methods
  this.shuffle = function(){
    if(cards.length === 0)
      // Initialize the deck if it isn't already.
      initDeck();

    // The deck has its cards. Shuffle it NUM_CARD_SWAP_PASSES times.
    const NUM_CARD_SWAP_PASSES = 100;
    for(var swap = 0; swap < NUM_CARD_SWAP_PASSES; swap++)
    {
      for(var i = 0; i < NUM_CARDS; i++)
      {
        var swapIndex = Math.floor(Math.random() * NUM_CARDS);
        if(swapIndex != i)
        {
          var card = cards[i];
          cards[i] = cards[swapIndex];
          cards[swapIndex] = card;
        }
      }
    }
  }

  this.reset = function() {
    initDeck();
  }

  this.deal = function() {
    return cards.pop();
  }

  this.displayCardsInDeck = function() {
    for(var i in cards)
      console.log("Card: " + cards[i][0] + "\nSuite: " + suitType[cards[i][1]] + "\n\n");
  }
}

//////// Player //////////

function Player(name)
{
  // public properties
  this.name = name;
  this.hand = [];

  // public methods
  this.takeCard = function(deck) {
    card = deck.deal();
    this.hand.push(card);
    return card;
  }

  this.discardLastCard = function() {
    this.hand.pop();
  }

  this.displayCardsOnHand = function() {
    for(var c = 0; c < this.hand.length; c++)
      console.log("Card: " + this.hand[c][0] + "\nSuite: " + this.hand[c][1] + "\n\n");
  }

}

////////// Test Deck //////////

var deck = new Deck();
deck.shuffle();
//deck.displayCardsInDeck();
deck.reset();
//deck.displayCardsInDeck();
deck.shuffle();
//deck.deal();
deck.displayCardsInDeck();

//////// Test Player //////////

var p1 = new Player("Hans");
var card = p1.takeCard(deck);
console.log("Card taken: " + card[0], card[1]);
//p1.discardLastCard();
p1.displayCardsOnHand();
