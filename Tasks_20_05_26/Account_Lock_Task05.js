// Problem: Track failed login attempts. Lock the account after 3 failed attempts.

// Sample Input/Output:

// Input: attempts = 2
// Output: 1 attempt left before lockout

// Input: attempts = 3
// Output: 🔒 Account Locked — Contact support

// Input: attempts = 0
// Output: Login successful

// let loginAttempts = 5;
// switch (loginAttempts) {
//     case 1:
//         console.log("Login successful");
//         break;
//     case 2:
//         console.log("1 attempt left before lockout");
//         break;
//     case 3:
//         console.log("🔒 Account Locked — Contact support");
//         break;
//     default:
//         console.log("No Login Attempts yet");

// }
let loginAttempts = 4;
if (loginAttempts === 0) {
    console.log("Login successful");
}
else if (loginAttempts === 1) {
    console.log("2 attempts left before lockout");
}
else if (loginAttempts === 2) {
    console.log("1 attempt left before lockout");
}
else if (loginAttempts >= 3) {
    console.log("🔒 Account Locked — Contact support");
}
else {
    console.log("Check the login Attempts");
}
