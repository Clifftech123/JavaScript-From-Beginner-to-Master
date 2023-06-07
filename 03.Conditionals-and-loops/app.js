//  Welcome the conditional and loops section all the code is here .

//  cod  statement syntax

// if (condition) {
//     //  code to execute if condition is true
// }

//  if  statement example
let age = 18;
if (age >= 18) {
  console.log("You are old enough to vote.");
} else {
  console.log("You are not old enough to vote yet.");
}

//  if else if  statement example

let temperature = 25;
if (temperature > 30) {
  console.log("It's too hot outside.");
} else if (temperature < 10) {
  console.log("It's too cold outside.");
} else {
  console.log("The temperature is just right.");
}

// last  example of if else if statement

let isRaining = true;
if (isRaining) {
  console.log("Remember to bring an umbrella.");
}

//   Switch statement example 1
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  case "Wednesday":
    console.log("Today is Wednesday.");
    break;
  default:
    console.log("Today is some other day.");
}

// Switch statement example 2
let fruit = "apple";
switch (fruit) {
  case "banana":
  case "apple":
    console.log("The fruit is either a banana or an apple.");
    break;
  case "orange":
    console.log("The fruit is an orange.");
    break;
  default:
    console.log("The fruit is unknown.");
}

// ==  Loops  ==

//  For loop example
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// do while loop example

let i = 0;

while (i < 5) {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
}

//  while loop example
let TK = 0;

do {
  console.log(TK); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  TK++;
} while (TK < 10);



// THANK YOU FOR READING THIS CODE