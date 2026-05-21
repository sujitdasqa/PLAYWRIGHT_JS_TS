// const is "Block-Scope" It can't be "Reassigned" and can't be "Redeclared"
const BASE_URL = "https://google.com";
const BASE_URL = "https://asdf.com" // Not allowed
BASE_URL = "https://facebook.com" // Not allowed

// In the case of let

let status = 'pending';
status = 'done';   // Allowed because it's Re-assignment, and let support reassignment
let ststue = 'inprogress' // Not allowed because let doesn't support Redeclaration

{
    let status = 'progress' // Allowed as let support block-scope
}