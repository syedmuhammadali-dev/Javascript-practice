// recursion function
// kisi function ma khud usi function ko call karna recursion kehlata hai

const helloUser = () => {
  const input = prompt("Enter your name");

  if (!input) {
    helloUser();
  } else {
    console.log(`Hello ${input}`);
  }
};

helloUser();

// lexical scope yani block scope

const uName = "ali";

function greet() {
  const email = "abc@xyz.com";
  console.log(email);
}
greet();

// console.log(email); // not defined aiga
console.log(uName);

// closure function

function outer(str) {
  console.log(str, "lexical");

  function inner() {
    console.log(str, "closure");
  }
  return inner;
}

// outer("I am inside closure!")();
const result = outer("I am inside closure!");
console.log(result);
