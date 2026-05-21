console.log(a); // ReferenceError: Cannot access 'a' before initialization


//Till this area it's TDZ (Temporary Dead Zone)
let a = 10;
console.log(a);

let x = 'global';
if (true) {
    console.log(x);


    let x = 'block'; // TDZ Ends 
    console.log(x);
}

console.log(name); // Error (Can't use until name is declared/assigned)

//TDZ Area
const name = "TDZ Example with const" // TDZ Ends
