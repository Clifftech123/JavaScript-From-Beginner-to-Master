//  welcome th array section for the series 

//   array of alphabet  with 3 elements 

const   Array = ["a", "b", "c"];
console.log(Array); 

  //  Array of numbers  with 4 elements
const arrayObject  = [1, 2, 3, 4];
console.log(arrayObject);


  //   Array of strings  with 3 elements
const  arrayString     = ["Hello", "World", "JavaScript"];
console.log(arrayString); 

  // Array of booleans  with 2 elements
const arrayBoolean = [{ name: "John" }, { name: "Doe" }];
console.log(arrayBoolean); 

  //   Array of objects  with 2 elements
const  arrayObjects = [
	[1, 2, 3],
	[4, 5, 6],
]; console.log(arrayObjects);[4, 5, 6]


//  array of mixed types  with 4 elements
const  arrayMixed = ["Hello", 10, { name: "John" }, [1, 2, 3]];
console.log(arrayMixed); 



// creating of and empty array
const emptyArray = [];
emptyArray.push("Isaiah");
emptyArray.push("Clifford");
emptyArray.push("Opoku");

console.log(emptyArray)


//   How to access array elements?
const accessArray = ["Hello", "World", "JavaScript"];
console.log(accessArray[0]); // Hello
console.log(accessArray[1]); // World
console.log(accessArray[2]); // JavaScript



//  How to modify array elements?
const modifyArray = ["Hello", "World", "JavaScript"];

modifyArray[0] = "javascript";
modifyArray[1] = "world";
modifyArray[2] = "hello";

console.log(modifyArray); 


//  How to add elements to an array?
let myArray = ["Hello", "World", "JavaScript"];
myArray.push("!"); 
console.log(myArray); 


//  Stack and Queue

/// LIFO (Stack)
const  stack = [];

// Add elements to the top of the stack using push()
stack.push("apple");
stack.push("banana");
stack.push("cherry");

let lastItem = stack.pop();
console.log(lastItem); 


//  FIFO (Queue)
const queue = [];

// Add elements to the end of the queue using push()
queue.push("apple");
queue.push("banana");
queue.push("cherry");
let firstItem = queue.shift();
console.log(firstItem); 

// Built-in methods for arrays

// Define an array of numbers
const numbers = [5, 3, 8, 2, 4, 1];

//  Use the `slice() method` to create a new array with a subset of the original array
const  slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers); 

//  Use the `splice() method` to remove elements from the array and add new elements in their place
numbers.splice(2, 2, 9, 7); 
console.log(numbers);


// Use the `concat() method` to combine two arrays into a new array
  const moreNumbers = [6, 0];
const combinedNumbers = numbers.concat(moreNumbers); 

/// Use the `join() method` to create a string from the elements of the array

const  numberString = numbers.join(" - "); 
console.log(numberString); 


/// Use the `reverse() method` to reverse the order of the elements in the array
numbers.reverse();


/// Use the `sort() method` to sort the elements of the array
numbers.sort(); 
console.log(numbers);  


// How to iterate over an array?

//   Define an array of numbers

const numbersTwo = [1, 2, 3, 4, 5,6,];

//  - Iterate over the elements of the array using a `for loop`

for (let i = 0; i < numbersTwo.length; i++)
    console.log(numbersTwo[i]); // 1 2 3 4 5 6

//  Iterate over the elements of the array using a 
for (let i = 0; i < numbersTwo.length; i++) {
  console.log(numbersTwo[i]); // output: 1, 2, 3, 4, 5
}

//  Iterate over the elements of the array using the `forEach() method`
numbersTwo.forEach(function (numbersTwo) {
  console.log(numbersTwo);   // output: 1, 2, 3, 4, 5,6 
});

//  Array Method
// Array copying example
// Define an array
let originalArray = [1, 2, 3];

// Copy the array by value using the slice() method
let copyByValue = originalArray.slice();

// Modify the copy by value
copyByValue.push(4);

// Modify the original array
originalArray.push(5);

// Print the results
console.log("Copy by value:", copyByValue); // Output: [1, 2, 3, 4]
console.log("Original array:", originalArray); // Output: [1, 2, 3, 5]

// Define an array
let anotherArray = [4, 5, 6];

// Copy the array by reference
let copyByReference = anotherArray;

// Modify the copy by reference
copyByReference.push(7);

// Modify the original array
anotherArray.push(8);

// Print the results
console.log("Copy by reference:", copyByReference); // Output: [4, 5, 6, 7, 8]
console.log("Original array:", anotherArray); // Output: [4, 5, 6, 7, 8]

