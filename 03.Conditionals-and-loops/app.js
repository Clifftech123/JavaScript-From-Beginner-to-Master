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
    console.log("Remember to bring an umbrella.")
    
}


//   Switch statement example
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
