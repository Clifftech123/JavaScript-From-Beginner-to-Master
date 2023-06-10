//  Welcome the Functions section all the code is here .

//  =======function declaration =======
function functionDeclaration() {
  console.log("function declaration !");
}
functionDeclaration();

//  Example 2
function addNumbers(a, b) {
  console.log(a + b);
}
addNumbers(5, 7);

//  Example 3
function calculateArea(radius) {
  return Math.PI * radius * radius;
}

let area = calculateArea(5);
console.log(area);

//  Example 4
function printPattern() {
  console.log("*****");
  console.log("****");
  console.log("***");
  console.log("**");
  console.log("*");
  console.log("end of pattern");
}

printPattern();

//  Example 5
function greetUser(name = " clifford", learning = "javascript") {
  console.log(`Hello, ${name}! Welcome to ${learning}!`);
}
greetUser();
greetUser("Isaiah ", "javascript");

// ===========Function  Parameters ======

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Clifford");

//  Example 2
function addNumbers(a, b) {
  console.log(a + b);
}

addNumbers(10, 10);

//  Example 3
function sayHello(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
sayHello();
sayHello("Clifford");

//  Example 4
function sumNumbers(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  console.log(sum);
}

sumNumbers(1, 2, 3, 4); 


//  ===  Function  Return Values ======
function multiply(a, b) {
  return a * b;
}

let result = multiply(3, 4);
console.log(result); 


//  Example 2
function greet(name) {
  return `Hello, ${name}!`;
}

let greeting = greet('John');
console.log(greeting); 

// Example 3

function getEvenNumbers(limit) {
  let evenNumbers = [];
  for (let i = 2; i <= limit; i += 2) {
    evenNumbers.push(i);
  }
  return evenNumbers;
}

let numbers = getEvenNumbers(10);
console.log(numbers); 

//  Example 4
function createPerson(name, age) {
  return {
    name: name,
    age: age,
  };
}

let person = createPerson('clifford', 25);
console.log(person);

//  Example 5
function isPositive(number) {
  return number > 0;
}

let positive = isPositive(7);
console.log(positive); 



//  ========Function Expressions ======

const SaySomething = function () {
    console.log("Something");
}
 
SaySomething();


//  Example 2
const ExpressionsaddNumbers = function (a, b) {
    console.log(a + b);
}
ExpressionsaddNumbers(5, 7)


//  Example 3
const sumX = function (a, b) {
    return a + b;
}
let resultX = sumX(3, 4);

//  == Arrow Functions  ======
const aSayHello = () => {
    console.log("Hello");
}

aSayHello();

//  Example 2
const greetSomeOne = (name) => {
  console.log(`Hello ${name}!`);
};

greetSomeOne("John"); 


//  Example 3

const aMultiply = (a, b) => {
  return a * b;
};
const Number=(3, 4);
console.log(aMultiply(3, 4));





//   == Higher Order Functions ======
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const resultT = applyOperation(5, 2, (a, b) => a * b);
console.log(resultT); 