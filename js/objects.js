// JavaScript: Objects

// Creating an object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    isStudent: true,

    // Method (Function inside an object)
    greet: function() {
        console.log("Hello, " + this.firstName + "!");
    }
};

// Accessing object properties
console.log(person.firstName);  // Outputs: John
console.log(person.age);        // Outputs: 25

// Calling object method
person.greet();  // Outputs: Hello, John!

// Modifying object properties
person.age = 30;
console.log(person.age);  // Outputs: 30

// Adding new properties
person.country = "USA";
console.log(person.country);  // Outputs: USA
