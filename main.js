// 1
function logToConsole(x, y) {
  for (let i = x; i <= y; i++) {
    console.log(i);
  }
}
logToConsole(3, 7);
// 2
const showEvenNumber = function (x, y) {
  for (let i = x; i <= y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
showEvenNumber(3, 10);
// 3
const calculateSum = (x, y) => {
  let sum = 0;
  for (let i = x; i <= y; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};
const res = calculateSum(3, 200);
console.log(res);
// 4
function findChar(word, char) {
  return word.includes(char);
}
console.log(findChar("Bill gates", "e"));
console.log(findChar("Bill gates", "z"));
// 5
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("hello"));
console.log(reverse("world"));
