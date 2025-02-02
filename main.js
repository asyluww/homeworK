// 1-task
// ASCENDING (по возрастанию)
const computers = [
  {
    title: "Macbook Air M1",
    price: 85000,
  },
  {
    title: "Dell",
    price: 65000,
  },
  {
    title: "Asus ZenBook",
    price: 40000,
  },
  {
    title: "Acer Aspire",
    price: 45000,
  },
  {
    title: "Macbook pro",
    price: 10000,
  },
];
const array = computers.sort((a, b) => a.price - b.price);
console.log(array);
// DESCENDING(по убыванию)
const computers2 = [
  {
    title: "Macbook Air M1",
    price: 85000,
  },
  {
    title: "Dell",
    price: 65000,
  },
  {
    title: "Asus ZenBook",
    price: 40000,
  },
  {
    title: "Acer Aspire",
    price: 45000,
  },
  {
    title: "Macbook pro",
    price: 10000,
  },
];
const array2 = computers2.sort((a, b) => b - a);
console.log(array2);
// 2-task
// ASCENDING (по возрастанию)
const grades = [4, 4, 4, 5, 3, 5, 3, 3, 2, 5, 1];
const array3 = grades.sort((a, b) => a - b);
console.log(array3);
// DESCENDING(по убыванию)
const grades2 = [4, 4, 4, 5, 3, 5, 3, 3, 2, 5, 1];
const array4 = grades.sort((a, b) => b - a);
console.log(array4);
// 3-task
// ASCENDING (по возрастанию)
const fruits = ["strawbery", "mango", "watermelon", "grapes", "lemon", "kiwi"];
const array5 = fruits.sort();
console.log(array5);
// DESCENDING(по убыванию)
const fruits2 = ["strawbery", "mango", "watermelon", "grapes", "lemon", "kiwi"];
const array6 = fruits.sort((a, b) => b.localeCompare(a));
console.log(array6);
// 4-task
// minNumber
const numbers = [4, 123, -5, 6, 100];
let minNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  minNumber = Math.min(minNumber, numbers[i]);
}
console.log(minNumber);
// maxNumber
const numbers2 = [4, 123, -5, 6, 100];
let maxNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  maxNumber = Math.max(maxNumber, numbers[i]);
}
console.log(maxNumber);
// 5-task
function formatDate(date) {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yy = date.getFullYear();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return `${dd}.${mm}.${yy}`;
}
let result = formatDate(new Date("2022-11-01"));
console.log(result);

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  return `саат - ${hours}, минута - ${minutes}`;
}
let date = new Date(2022, 0, 1, 11, 40);
console.log(formatTime(date));
// 6-task
const instagramUser = {
  userName: "Uzumaki123",
  email: "user@gmail.com",
  paswword: "123123",
  avatarUrl: "https://www.google.com/search?q=cat",
  followers: "1m",
  following: 512,
  title: "Never give up",
};
for (let key in instagramUser) {
  console.log(key);
}
for (let key in instagramUser) {
  console.log(instagramUser[key]);
}
// 7-task
const computers5 = [
  {
    title: "Macbook Air M1",
    price: 85000,
  },
  {
    title: "Dell",
    price: 65000,
  },
  {
    title: "Asus ZenBook",
    price: 40000,
  },
  {
    title: "Acer Aspire",
    price: 45000,
  },
  {
    title: "Macbook pro",
    price: 10000,
  },
];
let totalPrice = 0;
for (let computer of computers5) {
  totalPrice += computer.price;
}
console.log(totalPrice);
