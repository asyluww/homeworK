// 1)
function createStudent(firstName, lastName, age, university, faculty, gpa) {
  return {
    fullName: `${firstName} ${lastName}`,
    age: age,
    education: {
      university: university,
      faculty: faculty,
      gpa: gpa,
    },
    sayHello: () => {
      console.log(`hello${firstName} ${lastName}`);
    },
  };
}
let student = createStudent("Kybat", "Beishenov", 24, "ALATOO", "CS", 87);
console.log(student);
student.sayHello;
console.log(student);

// 2)
function deleteKey(student, age) {
  if ("forGot" in student) {
    delete student.age;
    console.log(student);
  } else {
    console.log("ключ ${key} отсутствует в обьекте");
  }
}
deleteKey(student);

// 3)
let user = {
  name: "asylay",
  age: "19",
  email: "nevkusno@gmail.com",
  password: "asyyu06607",
};
let Num = prompt("Введите свой email");
let sum = 5;
if (user.email !== Num) {
  alert("Извините, такого email не существует");
} else if (user.email !== Num) {
  Password = prompt("Введите свой пароль");
}
if (user.password !== Password) {
  alert("Неверный пароль");
} else if (user.password === Num) {
  calc = +prompt("2 + 3 = ?");
  if (calc === sum) {
    alert("Верно! Ваша премия = ${user.sum}");
    user.sum = calc;
  } else if (calc !== sum) {
    alert("Неправильный ответ");
  }
}
console.log(user);
