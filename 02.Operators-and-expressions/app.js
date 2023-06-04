// Welcome the  javascript   operators and expressions section of the source code.

//  ============== Arithmetic Operators ==============
// Subtraction Operator (-) example
let firstNumber = 10;
let secondNumber = 20;
const result = firstNumber - secondNumber;
console.log(result); // output: -10

// Multiplication Operator (*) example

let firstNum = 10;
let secondNum = 20;
const Multiplication = firstNum * secondNum;
console.log(Multiplication); // output: 200

// Division Operator (/) example
let firstDivide = 30;
let secondDivide = 20;
const Division = firstDivide / secondDivide;
console.log(Division); // output: 1.5

// Modulus Operator (%) example
let firstModulus = 50;
let secondModulus = 20;
const Modulus = firstModulus % secondModulus;
console.log(Modulus); /// Output: 0 (the remainder of 50 / 20 is 10 )

// Increment Operator (++) example
let firstIncrement = 10;
firstIncrement++;
console.log(firstIncrement); // output: 11 ( the value of firstIncrement is increased by 1)

// Decrement Operator (--) example

let firstDecrement = 10;
firstDecrement--;
console.log(firstDecrement); // output: 9 ( the value of firstDecrement is decreased by 1)

//  ============== Assignment Operators ==============

// Assignment Operator (=) example
let Assignment = 10;
console.log(Assignment); // output: 10

// Addition Assignment Operator (+=) example

let firstAddition = 10;
let secondAddition = 20;
firstAddition += secondAddition;
console.log(firstAddition); // output: 30 (firstAddition = firstAddition + secondAddition)

// Subtraction Assignment Operator (-=) example

let firstSubtraction = 10;
let secondSubtraction = 20;
firstSubtraction -= secondSubtraction;
console.log(firstSubtraction); // output: -10 (firstSubtraction = firstSubtraction - secondSubtraction)

// Multiplication Assignment Operator (*=) example

let firstMultiplication = 30;
let secondMultiplication = 40;
firstMultiplication *= secondMultiplication;
console.log(firstMultiplication); // output: 1200 (firstMultiplication = firstMultiplication * secondMultiplication)

// Division Assignment Operator (/=) example

let firstDivision = 2;
let secondDivision = 40;
firstDivision /= secondDivision;
console.log(firstDivision); // output: 0.05 (firstDivision = firstDivision / secondDivision)

// Modulus Assignment Operator (%=) example

let firstModulusAssignment = 50;
let secondModulusAssignment = 20;
firstModulusAssignment %= secondModulusAssignment;
console.log(firstModulusAssignment); // output: 10 (firstModulusAssignment = firstModulusAssignment % secondModulusAssignment)

//  ============== Comparison Operators ==============

// Equal to Operator (==) example

let firstEqual = 10;
let secondEqual = 20;
console.log(firstEqual == secondEqual); // output: false

// Not Equal to Operator (!=) example
let firstNotEqual = 10;
let secondNotEqual = 20;
console.log(firstNotEqual != secondNotEqual); // output: true

// Strict Equal to Operator (===)
let firstStrictEqual = 70;
let secondStrictEqual = 20;
console.log(firstStrictEqual === secondStrictEqual); // output: false

// Strict Not Equal to Operator (!==)
let firstStrictNotEqual = 70;
let secondStrictNotEqual = 20;
console.log(firstStrictNotEqual !== secondStrictNotEqual); // output: true

// Greater than Operator (>) example
let firstGreater = 100;
let secondGreater = 20;
console.log(firstGreater > secondGreater); // output: true

// Less than Operator (<) example
let firstLess = 100;
let secondLess = 20;
console.log(firstLess < secondLess); // output: false

// Greater than or Equal to Operator (>=) example
let firstGreaterEqual = 100;
let secondGreaterEqual = 20;
console.log(firstGreaterEqual >= secondGreaterEqual); // output: true

// Less than or Equal to Operator (<=) example
let firstLessEqual = 100;
let secondLessEqual = 20;
console.log(firstLessEqual <= secondLessEqual); // output: false

//  ============== Logical Operators ==============

// Logical AND Operator (&&) example

let firstLogicalAnd = 200;
let secondLogicalAnd = 20;
console.log(
  firstLogicalAnd > secondLogicalAnd && firstLogicalAnd < secondLogicalAnd
); // output: false

// Logical OR Operator (||) example

let firstLogicalOr = 200;
let secondLogicalOr = 20;
console.log(
  firstLogicalOr > secondLogicalOr || firstLogicalOr < secondLogicalOr
); // output: true

// Logical NOT Operator (!) example

let firstLogicalNot = 10;
let secondLogicalNot = 20;
console.log(!(firstLogicalNot > secondLogicalNot)); // output: false

// ================= String Operators =================

// Concatenation Operator (+) example

let firstConcatenation = "Hello";
let secondConcatenation = "World";
console.log(firstConcatenation + secondConcatenation); // output: HelloWorld

// Concatenation Assignment Operator (+=) example

let firstConcatenationAssignment = "Hello";
let secondConcatenationAssignment = "World";
firstConcatenationAssignment += secondConcatenationAssignment;
console.log(firstConcatenationAssignment); // output: HelloWorld

// Strict equality operator (===) example

let firstStrictEquality = "Hello";
let secondStrictEquality = "World";
console.log(firstStrictEquality === secondStrictEquality); // output: false

// Strict inequality operator (!==) example

let firstStrictInequality = "Hello";
let secondStrictInequality = "World";
console.log(firstStrictInequality !== secondStrictInequality); // output: true

//  ============== Ternary Operator ==============

// Ternary Operator (?:) example

let age = 20;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult); // output: Yes

// ============= Bitwise Operators =============
// Bitwise AND Operator (&) example

let firstBitwiseAnd = 5; // binary: 0101
let secondBitwiseAnd = 3; // binary: 0011
console.log(firstBitwiseAnd & secondBitwiseAnd); // Output: 1 (binary: 0001)

// Bitwise OR Operator (|) example
let firstBitwiseOr = 5; // binary: 0101
let secondBitwiseOr = 3; // binary: 0011
console.log(firstBitwiseOr | secondBitwiseOr); // Output: 7 (binary: 0111)

// Bitwise XOR Operator (^) example

let firstBitwiseXor = 30; // binary: 0001 1110
let secondBitwiseXor = 20; // binary: 0001 0100
console.log(firstBitwiseXor ^ secondBitwiseXor); // Output: 10 (binary: 0000 1010)

// Bitwise NOT Operator (~) example

let firstBitwiseNot = 5; // binary: 0000 0101
console.log(~firstBitwiseNot); // Output: -6 (binary: 1111 1010)

// Bitwise Left Shift Operator (<<) example

let firstBitwiseLeftShift = 5; // binary: 0000 0101
console.log(firstBitwiseLeftShift << 1); // Output: 10 (binary: 0000 1010)

// Bitwise Right Shift Operator (>>) example

let firstBitwiseRightShift = 5; // binary: 0000 0101
console.log(firstBitwiseRightShift >> 1); // Output: 2 (binary: 0000 0010)


// Thank  you for this code