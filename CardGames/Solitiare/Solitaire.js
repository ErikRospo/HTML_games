const main_slots = document.querySelectorAll(".main-slot")
const ace_slots = document.querySelectorAll(".ace-card-slot")
const draw_slot = document.querySelector(".draw-div")
const discard_slot = document.querySelector(".discard-div")
var main_slots_list=[]
function startGame() {
	const deck = new Deck();
	deck.shuffle();
}
function updateDecks() {
	
}