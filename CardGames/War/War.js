const CARD_VALUE_MAP = {
    "A": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,

}
const ComputerCardSlot = document.querySelector(".computer-card-slot");
const PlayerCardSlot = document.querySelector(".player-card-slot");
const ComputerDeckElement = document.querySelector(".computer-deck");
const PlayerDeckElement = document.querySelector(".player-deck");
const text = document.querySelector(".text");
let PlayerDeck, ComputerDeck, InRound
startGame();

document.addEventListener("click", () => {
    if (InRound) {
        CleanBeforeRound()
    } else {
        FlipCard()
    }
    OutRoundWinner()
})

function startGame() {
    const deck = new Deck();
    deck.shuffle();
    const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
    PlayerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    ComputerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
    InRound = false
    CleanBeforeRound()
}

function CleanBeforeRound() {
    InRound = false
    ComputerCardSlot.innerHTML = ''
    PlayerCardSlot.innerHTML = ''
    text.innerHTML = ''
    updateDeckCount()
}

function FlipCard() {
    InRound = true;
    const PlayerCard = PlayerDeck.pop()
    const ComputerCard = ComputerDeck.pop()
    PlayerCardSlot.appendChild(PlayerCard.getHTML());
    ComputerCardSlot.appendChild(ComputerCard.getHTML());
    updateDeckCount();
    let RW = inRoundWinner(PlayerCard, ComputerCard);
    if (RW == -1) {
        ComputerDeck.push(PlayerCard)
        ComputerDeck.push(ComputerCard)
    } else if (RW == 1) {
        PlayerDeck.push(PlayerCard)
        PlayerDeck.push(ComputerCard)
    } else {
        PlayerDeck.push(PlayerCard)
        ComputerDeck.push(ComputerCard)
    }
}

function updateDeckCount() {
    ComputerDeckElement.innerText = ComputerDeck.numberOfCards
    PlayerDeckElement.innerText = PlayerDeck.numberOfCards
}

function inRoundWinner(cardOne, cardTwo) {
    CardOneValue = CARD_VALUE_MAP[cardOne.value]
    CardTwoValue = CARD_VALUE_MAP[cardTwo.value]
    return Math.sign(CardOneValue - CardTwoValue)
}

function OutRoundWinner() {
    if (ComputerDeck.numberOfCards() == 0) {
        alert("Player won!")
        if (confirm("Play again?")) {
            startGame()
        }
    } else if (PlayerDeck.numberOfCards() == 0) {
        alert("Computer won!")
        if (confirm("Play again?")) {
            startGame()
        }
    }
}