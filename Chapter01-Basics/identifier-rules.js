/*
================================================================================
                    JAVASCRIPT IDENTIFIER NAMING RULES
================================================================================

An identifier is a name given to variables, functions, classes, constants,
or any user-defined item in JavaScript.

RULE 1: MUST START WITH A LETTER, UNDERSCORE (_), OR DOLLAR SIGN ($)
        - Cannot start with a number (0-9)
        - Valid: myVar, _private, $element
        - Invalid: 1stName, 2data

RULE 2: CAN CONTAIN LETTERS, DIGITS, UNDERSCORES, OR DOLLAR SIGNS
        - After the first character, numbers are allowed
        - Valid: item1, user_name, $btn2
        - Invalid: my-var, total@amount, name#1

RULE 3: CANNOT CONTAIN SPACES OR SPECIAL CHARACTERS
        - No spaces, hyphens, or symbols like @, #, %, &, etc.
        - Use camelCase, snake_case, or PascalCase instead
        - Invalid: first name, total-amount, rate%

RULE 4: CASE-SENSITIVE
        - myVar, myvar, MyVar, and MYVAR are all different identifiers
        - Be consistent with naming conventions

RULE 5: CANNOT BE A RESERVED KEYWORD
        - Words like var, let, const, function, class, return, if, else,
          for, while, switch, case, break, continue, etc. cannot be used
        - Invalid: var, let, const, function, class, if, else, return

RULE 6: SHOULD BE DESCRIPTIVE AND MEANINGFUL
        - Use names that clearly describe the purpose
        - Good: userAge, totalPrice, isLoggedIn
        - Bad: x, y, z, temp, data1

RULE 7: NO LENGTH LIMIT (BUT KEEP IT REASONABLE)
        - Technically unlimited length, but keep names readable
        - Good: customerEmailAddress
        - Bad: thisIsAVeryLongVariableNameThatIsHardToReadAndType

RULE 8: UNICODE CHARACTERS ARE ALLOWED (BUT AVOID THEM)
        - You can use letters from any language, but stick to English
        - Valid: 名字, переменная (not recommended for team projects)

================================================================================
                              NAMING CONVENTIONS
================================================================================

camelCase    : first word lowercase, subsequent words capitalized
               → Used for: variables, functions, methods
               → Example: firstName, getUserData, calculateTotal

snake_case   : all lowercase with underscores separating words
               → Used for: constants (sometimes), database fields
               → Example: user_name, MAX_SIZE, api_key

PascalCase   : every word starts with a capital letter
               → Used for: class names, constructor functions, React components
               → Example: Person, UserProfile, ShoppingCart

UPPER_SNAKE_CASE : all uppercase with underscores
                   → Used for: constants
                   → Example: PI, MAX_USERS, API_BASE_URL

================================================================================
*/

// =============================================================================
// EXAMPLE 1: VARIABLE DECLARATIONS WITH DIFFERENT IDENTIFIER STYLES
// =============================================================================

// camelCase - Most common for variables
let firstName = "John";
let lastName = "Doe";
let userAge = 25;
let isActiveUser = true;
let emailAddress = "john.doe@example.com";

// snake_case - Often used for constants and configuration values
let user_name = "johndoe";
let phone_number = "555-1234";
let created_at = new Date();

// Starting with underscore - Convention for "private" or internal use
let _internalCounter = 0;
let _privateKey = "secret-key-123";
let _temporaryValue = null;

// Starting with dollar sign - Often used for DOM elements or jQuery-like objects
let $headerElement = document.getElementById("header");
let $modalContainer = document.querySelector(".modal");
let $btnSubmit = document.getElementById("submit-btn");

// =============================================================================
// EXAMPLE 2: CONSTANTS - UPPER_SNAKE_CASE
// =============================================================================

const PI = 3.14159;
const MAX_USERS = 100;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_TIMEOUT_MS = 5000;
const ENVIRONMENT = "production";

// =============================================================================
// EXAMPLE 3: FUNCTION NAMES - camelCase
// =============================================================================

// Function to get user full name
function getFullName(first, last) {
    return `${first} ${last}`;
}

// Function to calculate area
function calculateArea(width, height) {
    return width * height;
}

// Function to check if user is eligible
function isEligibleToVote(age) {
    return age >= 18;
}

// Function to format currency
function formatCurrency(amount, currency) {
    return `${currency}${amount.toFixed(2)}`;
}

// Function with verb + noun pattern
function sendEmailNotification(recipient, message) {
    console.log(`Sending email to ${recipient}: ${message}`);
}

// =============================================================================
// EXAMPLE 4: CLASS NAMES - PascalCase
// =============================================================================

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name}`;
    }
}

class UserAccount {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    validatePassword() {
        return this.password.length >= 8;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        this.items.push({ product, quantity });
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
}

// =============================================================================
// EXAMPLE 5: BOOLEANS - Should sound like yes/no questions
// =============================================================================

let isLoggedIn = false;
let hasPermission = true;
let canEditPost = false;
let shouldShowModal = true;
let isEmailVerified = false;
let hasActiveSubscription = true;

// =============================================================================
// EXAMPLE 6: ARRAYS AND COLLECTIONS - Plural nouns
// =============================================================================

let users = ["Alice", "Bob", "Charlie"];
let productList = ["Laptop", "Mouse", "Keyboard"];
let availableColors = ["red", "blue", "green"];
let customerOrders = [
    { id: 1, total: 99.99 },
    { id: 2, total: 49.50 }
];

// =============================================================================
// EXAMPLE 7: COMPLEX/DESCRIPTIVE IDENTIFIERS
// =============================================================================

// Descriptive names that explain what they do
let numberOfActiveSessions = 42;
let totalRevenueForCurrentQuarter = 150000.00;
let averageResponseTimeInMilliseconds = 245;
let maximumAllowedLoginAttempts = 5;
let defaultUserProfilePictureUrl = "/images/default-avatar.png";

// =============================================================================
// EXAMPLE 8: DEMONSTRATING CASE SENSITIVITY (Rule 4)
// =============================================================================

let itemPrice = 100;      // camelCase
let ItemPrice = 150;      // PascalCase - DIFFERENT variable
let itemprice = 200;      // all lowercase - DIFFERENT variable
let ITEMPRICE = 250;      // all uppercase - DIFFERENT variable

console.log("itemPrice:", itemPrice);     // 100
console.log("ItemPrice:", ItemPrice);     // 150
console.log("itemprice:", itemprice);     // 200
console.log("ITEMPRICE:", ITEMPRICE);     // 250

// =============================================================================
// EXAMPLE 9: USING THE IDENTIFIERS
// =============================================================================

// Create a user using the Person class
const person1 = new Person(firstName, userAge);
console.log(person1.greet());

// Calculate area
const rectangleArea = calculateArea(10, 5);
console.log("Area:", rectangleArea);

// Check voting eligibility
const canVote = isEligibleToVote(userAge);
console.log("Can vote:", canVote);

// Format price
const formattedPrice = formatCurrency(itemPrice, "$");
console.log("Formatted price:", formattedPrice);

// Use boolean flags
if (isLoggedIn && hasActiveSubscription) {
    console.log("User has full access");
} else {
    console.log("Access restricted");
}

// Process array
users.forEach((user, index) => {
    console.log(`User ${index + 1}: ${user}`);
});

// =============================================================================
// EXAMPLE 10: COMMON MISTAKES TO AVOID (These would cause errors!)
// =============================================================================

// INVALID - Uncomment to see errors:
// let 1stPlace = "Gold";           // Starts with number
// let my-variable = "test";        // Contains hyphen
// let my variable = "test";        // Contains space
// let var = 10;                    // Reserved keyword
// let function = "do something";   // Reserved keyword
// let return = true;               // Reserved keyword
// let total$amount = 100;          // $ is OK, but @, #, % are NOT
// let my@email = "test";           // Invalid special character

// =============================================================================
// SUMMARY: BEST PRACTICES
// =============================================================================
// 1. Use camelCase for variables and functions
// 2. Use PascalCase for classes and constructors
// 3. Use UPPER_SNAKE_CASE for constants
// 4. Start booleans with 'is', 'has', 'can', or 'should'
// 5. Use plural names for arrays and collections
// 6. Be descriptive but concise
// 7. Avoid single-letter names except for loop counters (i, j, k)
// 8. Never use reserved keywords
// 9. Be consistent throughout your codebase
// =============================================================================
