
class Deck {
    constructor(cards = FreshDeck()) {
    if (cards=="NoDeck"){
        this.cards=[]
    }else{
        this.cards = cards;
    }

    }
    get numberOfCards() {
        return this.cards.length - 1;
    }
    shuffle() {
        for (let i = this.numberOfCards; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
    pop() {
        return this.cards.shift()
    }
    push(card) {
        this.cards.push(card)
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
        this.faceUp=false;
    }
    
    get color() {
        return this.suit === "♥" || this.suit === "♦" ? "red":"black"
    }
    flip(){
        this.faceUp=!this.faceUp
    }
    getHTML() {
        const cardDiv = document.createElement("div")
        cardDiv.innerText = this.suit
        cardDiv.classList.add("card", this.color)
        cardDiv.dataset.value = `${this.value} ${this.suit}`
        return cardDiv
    }
    getText(){
        return `${this.value}${this.suit}`
    }
}
class Slot extends Card{
    constructor(suit, value){
    super(suit,value)
    }
}
class Pile {
    constructor(){
        this.contents=[Slot]
        this.contents[0].faceUp=true;
    }
}
function FreshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}