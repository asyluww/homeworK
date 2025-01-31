const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((num) => num * num);
console.log(squares);
// 2
const users = [
  { firstName: "John", lastName: "Obama", age: 34, gender: "male" },
  { firstName: "Ariana", lastName: "Grande", age: 22, gender: "female" },
  { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
  { firstName: "Christiano", lastName: "Ronaldo", age: 38, gender: "male" },
];
const result = users.map((user) => ({
  fullName: `${user.firstName} ${user.lastName}, age:${user.age}, gender:${user.gender}`,
}));
console.log(result);
// 3
const numbers2 = [1, 2, 3, 4, 5, 8, 34, 3, 6];
const evenNumbers = numbers2.filter((number) => number % 2 === 0);
console.log(evenNumbers);
// 4
const users2 = [
  { firstName: "John", lastName: "Obama", age: 34, gender: "male" },
  { firstName: "Ariana", lastName: "Grande", age: 18, gender: "female" },
  { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
  { firstName: "Kakashi", lastName: "Hatake", age: 28, gender: "male" },
  { firstName: "Sakura", lastName: "Chan", age: 18, gender: "female" },
];
const female = users2.filter((user) => user.gender === "female");
console.log(female);
// 5
const numbers3 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
let sum = 0;

numbers3.forEach((number) => {
  if (number % 2 !== 0) {
    sum += number;
  }
});
console.log(sum);
// 6
const users3 = [
  { firstName: "John", lastName: "Obama", age: 34, gender: "male" },
  { firstName: "Ariana", lastName: "Grande", age: 18, gender: "female" },
  { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
  { firstName: "Kakashi", lastName: "Hatake", age: 28, gender: "male" },
  { firstName: "Sakura", lastName: "Chan", age: 18, gender: "female" },
];
const people = users.find((user) => user.firstName === "Naruto");
console.log(people);
// 7
const numbers4 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
const index = numbers4.findIndex((number) => number === 34);
console.log(index);
// 8
const users4 = [
  { firstName: "John", lastName: "Obama", age: 34, gender: "male" },
  { firstName: "Ariana", lastName: "Grande", age: 22, gender: "female" },
  { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
  { firstName: "Christiano", lastName: "Ronaldo", age: 38, gender: "male" },
];
const people2 = users4.reduce((acc, item) => {
  acc[item.firstName] = item;
  return acc;
}, {});
console.log(people2);
