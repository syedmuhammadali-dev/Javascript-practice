// includes method boolean value return karega agar element mil gaya to true dega or agar nahi mila to false dega
// includes method ko use karne ke liye array me hona chahiye

const fruits = ["apple", "mango", "orange", "grapes", "banana"];
console.log(fruits.includes("mango")); // true
console.log(fruits.includes("kiwi")); // false

// at method  sirf index number dega or agar index number nahi mila to undefined dega

const fruits1 = ["apple", "mango", "orange", "grapes", "banana"];
console.log(fruits1.at(3)); // grapes

// filter method  pora filter karaga or jitna condition match hoga utne hi elements return karega

// 1

const fruits2 = [
  "apple",
  "mango",
  "orange",
  "mango",
  "grapes",
  "mango",
  "banana",
  "mango",
];
const mangoData = fruits2.filter((item, index) => {
  console.log(item, index);
  return item == "mango";
});

console.log(mangoData);

// 2

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const gNum = num.filter((eachNum, index) => {
  return eachNum > 5;
});

console.log(gNum); // [6, 7, 8, 9, 10]

// find method pora nhi chalaga jahan condition match hoga wahi element return karega 1st wala us sa aga nhi chala ga

const fruits3 = [
  "apple",
  "mango",
  "orange",
  "mango",
  "grapes",
  "mango",
  "banana",
  "mango",
];
const mangoData1 = fruits3.find((item) => {
  return item == "mango";
});

console.log(mangoData1);

// starts with method boolean value return karega agar string ke starting me wo element mil gaya to true dega or agar nahi mila to false dega, startsWith method ko use karne ke liye string me hona chahiye

const str = "hello world";
console.log(str.startsWith("h"));

const users = [
  {
    id: 1,
    name: "Ahmed",
    title: "MERN ENGINEER",
    isSenior: true,
    skills: ["HTML", "CSS", "Js", "React"],
  },
  {
    id: 2,
    name: "Zubair",
    title: "MERN ENGINEER",
    isSenior: false,
    skills: ["HTML", "CSS", "Js"],
  },
  {
    id: 3,
    name: "Ayan",
    title: "MERN ENGINEER",
    isSenior: false,
    skills: ["HTML", "CSS"],
  },
  {
    id: 4,
    name: "Ali",
    title: "MERN ENGINEER",
    isSenior: true,
    skills: ["HTML", "CSS", "Js", "React", "Node"],
  },
];

// const seniorUsers = users.filter((user) => {
//   return user.isSenior;
// });

// console.log(seniorUsers);

const seniorSkills = users.filter((users) => {
  return users.skills > 3;
});

console.log(seniorSkills);

// some method boolean value return karega agar array me koi bhi element condition match karta hai to true dega or agar nahi mila to false dega

const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEven = num1.some((num) => {
  console.log(num);
  return num % 2 == 0;
});
console.log(isEven);

// findIndex method

const arr = [
  {
    id: 1,
    name: "Ahmed",
  },
  {
    id: 2,
    name: "Ali",
  },
  {
    id: 3,
    name: "popaye",
  },
  {
    id: 4,
    name: "Haider",
  },
];

const find = arr.findIndex((element) => {
  return element.id == 3;
});

console.log(arr.splice(find, 1)); // is ma kuch error hai

// split method string ko array ma convert karta hai

const str1 = "welcome to js";
console.log(str1.split(" "));
//
// join method split ka ulta hai

const str2 = ["hello", "js", "es6"];
console.log(str2.join(" "));
//
// map method

const number = [1, 2, 3, 4, 5];
const modifyNumber = number.map((element) => {
  return element + 1;
});
console.log(modifyNumber);
