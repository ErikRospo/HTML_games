const SUITS = ["♠", "♦", "♥", "♣"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
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
const ImgIdValueGetter = {
    1: "ace",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "jack",
    12: "queen",
    13: "king"
};
const ImgIdSuitGetter = {
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts",
    "♣": "clubs"
}
const SPADES = "♠";
const DIAMONDS = "♦";
const HEARTS = "♥";
const CLUBS = "♣";
const REDS = [HEARTS, DIAMONDS]
const BLACKS = [CLUBS, SPADES]