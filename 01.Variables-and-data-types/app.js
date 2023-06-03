// Variables and data types

/*
// ============ String Example ==-====
*/
const singleQuotes = "Hello, this is a single quote in JavaScript";
const doubleQuotes = "Hello, this is a double quote in JavaScript";
const nameOject = "Clifford";
const backticks = `Hello, ${nameOject}. This is a backtick in JavaScript`;

//  console the results
console.log(singleQuotes);
console.log(doubleQuotes);
console.log(backticks);

/*
// ============     Javascript Numbers   ==-====
*/

const number1 = 2;
const number2 = 2.433;
const number3 = 3e5;

//  console the results
console.log(number1);
console.log(number2);
console.log(number3);

// // Special Number Examples
const SpecialNumber1 = 3 / 0;
console.log(number1); // Infinity

const SpecialNumber2 = -3 / 0;
console.log(number2); // -Infinity

const SpecialNumber3 = "abc" / 3;
console.log(number3); // NaN

/*
// ============    JavaScript BigInt   ==-====

*/

const a = 12345678901234567890n;
const b = 98765432109876543210n;
const c = a + b;

console.log(c);

// error code
const ab = 12345678901234567890n;
const bc = 123;

// const cd= ab + bc;

/*
// ============   JavaScript Boolean     ==-====

*/

//  declare boolean variables
const isTrue = true;
const isFalse = false;

// first  example
let age = 50;
let isAdult = age >= 18;
console.log(isAdult); // true

// second example
let myArray = [1, 2, 3, 4];
let includesTwo = myArray.includes(2);
console.log(includesTwo); // true
let includesFive = myArray.includes(5);
console.log(includesTwo); // true

/*
// ============   JavaScript Null    ==-====

*/

// syntax

const nullValue = null;

// code example
let myVariable = null;

if (myVariable === null) {
  console.log("The variable is null");
} else {
  console.log("The variable has a value");
}

/*
// ============  Undefined   ==-====

*/

const undefinedValue = undefined;
let undefinedValue2;
console.log(undefinedValue);

/*
// ============  Symbol   ==-====

*/

const mySymbol = Symbol();
const myObject = {};

myObject[mySymbol] = "Hello, world!";

console.log(myObject[mySymbol]);

/*
// ============  Object   ==-====

*/

const person = {
  name: "Isaiah Clifford",
  age: 30,
  profession: "Software Engineer",
};
console.log(person.name);
console.log(person.profession);


/*
// ============  Array   ==-====

*/


const MyArray = [a, b, c];
console.log(myArray[0]); // a
console.log(myArray[1]); // b
console.log(myArray[2]); // c