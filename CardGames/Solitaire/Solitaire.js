const main_slots = document.querySelectorAll(".main-slot")
const ace_slots = document.querySelectorAll(".ace-card-slot")
const draw_slot = document.querySelector(".draw-div")
const discard_slot = document.querySelector(".discard-div")
var main_slots_list = []

function startGame() {
    const deck = new Deck();
    deck.shuffle();
    main_slots_list = []
    for (let index = 0; index < 10; index++) {
        main_slots_list.push(new Deck("NoDeck"))
    }
    setup(deck);
    updateDecks();
}
document.addEventListener("click", () => {
    startGame()
})
startGame()

function setup(deck) {
    for (let index = 0; index < main_slots.length; index++) {
        const element = main_slots[index];
        for (let index1 = 0; index1 < index + 1; index1++) {
            main_slots_list[index].push(deck.pop());
        }

    }

}

function updateDecks() {
    for (let index = 0; index < main_slots.length; index++) {
        for (let index2 = 0; index2 < main_slots[index].children.length; index2++) {
            const element = main_slots[index].children[index2];
            main_slots[index].removeChild(element);
        }
        var elm = main_slots_list[index].pop()
        var image = document.createElement("img")
        image.className = "ImageImage";
        image.src = `../PNG-cards/${ImgIdValueGetter[CARD_VALUE_MAP[elm.value]]}_of_${ImgIdSuitGetter[elm.suit]}.png`
        main_slots[index].appendChild(image)

        // ("data-value",main_slots_list[index].cards[0].getText());
    }
}