// let is "Block-Scope" It can be "Reassigned" but can't be "Redeclared"
let a = 24;

let count = 0;
let count = count + 1; // Re-assignment allowed
let count = count + 2;
console.log("Count");

let count = 5; // Redeclaration not allowed // Syntax Error

// Block-scope example
let executionStatus = "pending";
if (executionStatus === "pending") {
    let executionTime = 1200;
    console.log("Block-Scope Example:", executionTime); // "Block-Scope"
}
console.log(executionTime);  // outof block-scope // ReferenceError



