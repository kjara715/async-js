// // Part 2: Deck of Cards
// // Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. 
// //Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

async function drawAcard(){
    let res = await axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
    console.log(res.data.cards[0].value, " of ", res.data.cards[0].suit);
    

}


// Make a request to the deck of cards API to request a single card from a newly shuffled deck. 
//Once you have the card, make a request to the same API to get one more card from the same deck.
// Once you have both cards, console.log the values and suits of both cards.


async function drawTwoCards(){

    card1 = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    let card1data = [card1.data.cards[0].value, card1.data.cards[0].suit]
    let deck_id=card1.data.deck_id
    card2= await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    let card2data=[card2.data.cards[0].value, card2.data.cards[0].suit]
    console.log(`Card 1 is ${card1data[0]} of ${card2data[1]}`, `Card 2 is ${card2data[0]} of ${card2data[1]}`)
}





// Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

async function drawFromDeck() {
    let $button=$('button')
    let $cardArea=$('#card-area')
    

    let newDeck = await $.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle');
    $button.on("click", async function(){
        $cardArea.empty()
        let cardData = await $.getJSON(`https://deckofcardsapi.com/api/deck/${newDeck.deck_id}/draw`);
        console.log(cardData)
        let cardPic = cardData.cards[0].image
        console.log(cardData.cards[0].value, " of ", cardData.cards[0].suit)
        $cardArea.append(`<img src="${cardPic}">`)
        if(cardData.remaining === 0){
            $($button).remove()
            $cardArea.append('<p>').text("Deck completed.")
        }
    })

}

drawFromDeck()
