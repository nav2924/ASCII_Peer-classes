// JavaScript: Functions

// Simple function
function greet() {
    console.log("Hello, welcome!");
}

// Function with parameters
function add(a, b) {
    return a + b;
}

// Calling functions
greet(); // Outputs: Hello, welcome!
console.log(add(5, 3)); // Outputs: 8

// Function with default parameter
function multiply(a, b = 2) {
    return a * b;
}

console.log(multiply(5)); // Outputs: 10 (5 * 2)
