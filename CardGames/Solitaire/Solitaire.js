const main_slots = document.querySelectorAll(".main-slot")
const ace_slots = document.querySelectorAll(".ace-card-slot")
const draw_slot = document.querySelector(".draw-div")
const discard_slot = document.querySelector(".discard-div")
const restart_button=document.querySelector(".restart");
var main_slots_list = []

function startGame() {
    const deck = new Deck();
    deck.shuffle();
    main_slots_list = []
    for (let index = 0; index < 7; index++) {
        main_slots_list.push(new Deck("NoDeck"))
    }
    setup(deck);
    updateDecks();
}
restart_button.addEventListener("click", () => {
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
        var moveDownOffset=0
        for (let index3=0;index3<=main_slots_list[index].cards.length;index3++){
            moveDownOffset+=20
            var elm = main_slots_list[index].pop()
            console.log(elm)
            console.log(main_slots_list[index])
            var image = document.createElement("img")
            image.className = "ImageImage";
            if (main_slots_list[index].cards.length){
                console.log("a")
                image.src = `../PNG-cards/${ImgIdValueGetter[CARD_VALUE_MAP[elm.value]]}_of_${ImgIdSuitGetter[elm.suit]}.png`
            }else{
                console.log("b")
                image.src="../PNG-cards/back.png"
            }
            image.style=`top:${moveDownOffset}px`
            main_slots[index].appendChild(image)
        }
    }
}