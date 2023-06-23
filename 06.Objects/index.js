// first Object 
const  firstObject = {
  name : "Clifford",
  age : 30,
  city : "Ghana",
};

// // Accessing object properties using the dot notation

console.log(firstObject.name);
console.log(firstObject.age);
console.log(firstObject.city);

// // Accessing object properties using the bracket notation

console.log(firstObject["name"]);
console.log(firstObject["age"]);
console.log(firstObject["city"]);

// Adding New Properties to an Object

const AddObject = {
    language: "JavaScript",
    year: 1995,
    paradigm: "OO"
};
    
// Adding a new property to an object using the dot notation

AddObject.author = "Brendan Eich";
console.log(AddObject.author);

// Adding a new property to an object using the bracket notation

AddObject["company"] = "Netscape";
console.log(AddObject["company"]);


//  Deleting Properties from an Object
const deleteObject = {
    language: "typeScript",
    year: 2012,
    paradigm: "OO"
};


// Deleting a property from an object using the dot notation

deleteObject.year = undefined;
console.log(deleteObject.year);

// Deleting a property from an object using the bracket notation

deleteObject["paradigm"] = undefined;
console.log(deleteObject["paradigm"]);

