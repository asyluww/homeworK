// 1)
let stu1 = {
  name: "asylai",
  age: "19",
};

let stu2 = stu1;
stu2 = Object.assign({}, stu1);
delete stu2.age;

console.log(stu1);

console.log(stu2);

// 2)
let array = [
  1,
  true,
  3,
  {
    name: "ZN",
    hobbies: ["swimming", "reading"],
  },
  5,
  "hello",
  "hi",
];

console.log(array[1]);

console.log(array[4]);

console.log(array[3].hobbies);

console.log(array[3].hobbies.pop());

array.unshift("Task");
console.log(array);

array.push("good");
console.log(array);

array.shift();
console.log(array);

console.log(array.indexOf("hello"));

console.log(array.slice(0, 3));

array[3].hobbies.push("football");
console.log(array);

let length = array.length;
console.log(length);

// 3)
const array1 = [1, 2, 3, "sdf", 4, "sdf", {}, 3, true, 2, [1, 6, 3], 1];
function NUmber(array1) {
  let sum = 0;
  for (let i = 0; i < array1.length; i++) {
    let data = array1[10].map((item) => item);
    if (typeof array1 === "number") {
      sum += array[2] + data[2];
    }
    return sum;
  }
}
let result = NUmber(array1);
console.log(result);
