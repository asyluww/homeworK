// 1
let num = prompt("прошу, введите число");
num = 10 ? console.log("верно") : console.log("неверно");

// 2
let number = prompt("прошу, введите номер квартиры");
if (number <= 20) {
  console.log("подьезд 1");
} else if (number <= 48) {
  console.log("подьезд 2");
} else if (number <= 90) {
  console.log("подьезд 3");
} else {
  console.log("номер такой квартиры не найден");
}

// 3
let flor = prompt("введите число от 0 до 5");
if (flor >= 0 && flor <= 5) {
  console.log("верно");
} else {
  console.log("неверно");
}

// 4, 5
let tif = prompt("данное время");
const userName = "samira";
if (tif >= 6 && tif <= 12) {
  console.log("доброе утро," + userName);
} else if (tif >= 13 && tif <= 17) {
  console.log("добрый день! " + userName);
} else {
  console.log("добрый вечер!" + userName);
}

// 6
let sale = prompt("введите свой возраст, вам предусмотрена скидка");
if (sale <= 6 || sale >= 65) {
  console.log("скидка");
} else {
  console.log("скидки нет");
}

// 7
let game1 = prompt("игрок-1: введите камень, ножницы или бумага");
let game2 = prompt("игрок-2:введите: камень, ножницы или бумага");
if (game1 == "камень" && game2 == "камень") {
  console.log("победила дружба!");
} else if (game1 == "ножницы" && game2 == "ножницы") {
  console.log("победила дружба!");
} else if (game1 == "камень" && game2 == "ножницы") {
  console.log("победил 1 игрок");
} else if (game1 == "бумага" && game2 == "ножницы") {
  console.log("победил 2 игрок");
} else if (game1 == "ножницы" && game2 == "бумага") {
  console.log("победил 1 игрок");
} else if (game1 == "бумага" && game2 == "бумага") {
  console.log("победила дружба!");
}

// 8
const num22 = 7;
if (num22 % 2 === 0) {
  console.log("число чётное");
} else {
  console.log("число нечётное");
}
