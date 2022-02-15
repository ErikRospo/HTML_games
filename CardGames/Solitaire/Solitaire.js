const main_slots = document.querySelectorAll(".main-slot")
const ace_slots = document.querySelectorAll(".ace-card-slot")
const draw_slot = document.querySelector(".draw-div")
const discard_slot = document.querySelector(".discard-div")
var main_slots_list=[]
function startGame() {
	const deck = new Deck();
	deck.shuffle();
	for (let index = 0; index < 10; index++) {
		main_slots_list.push(new Deck("NoDeck"))		
	}
	setup(deck);
	updateDecks();
}
document.addEventListener("click",()=>{
	startGame()
})
startGame()
function setup(deck) {
	for (let index = 0; index < main_slots.length; index++) {
		const element = main_slots[index];
		for (let index1 = 0; index1 < index+1; index1++) {
			main_slots_list[index].push(deck.pop());
		}
		
	}

}
function updateDecks() {
	for (let index = 0; index < main_slots.length; index++) {
		var elm=main_slots_list[index].pop()
		var image=document.createElement("img")
		image.src=`../PNG-cards/${ImgIdValueGetter[elm[0].value]}_of_${ImgIdSuitGetter[elm[0].suit]}.png`
		main_slots[index][0].appendChild(image)

		// ("data-value",main_slots_list[index].cards[0].getText());
	}
}