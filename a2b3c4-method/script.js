const fruits = [
  "apple",
  "banana",
  "mango",
  "apple",
  "mango",
  "banana",
  "apple",
  "mango",
];

const fruitsMap = new Map();

for (let i = 0; i < fruits.length; i++) {
  if (fruitsMap.has(fruits[i])) {
    fruitsMap.set(fruits[i], fruitsMap.get(fruits[i]) + 1);
  } else {
    fruitsMap.set(fruits[i], 1);
  }
}

console.log(fruitsMap);
const p = document.getElementById("p");

let currentIndex = 0;
const arr = [1, 2, 3, 4, 5, 6];

for (let j = 0; j < arr.length; j++) {
  setInterval(() => {
    console.log(arr[j]);
  }, 2000);
}
