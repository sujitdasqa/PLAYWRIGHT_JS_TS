let a = 10;
console.log(a);
function FunctionScopedExample() {
    console.log("Sujit Das");
    let a = 20;
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a)
    }
    console.log("This value is due to Block-Scope Naiture:", a); // O/P 20
}
console.log("G ->", a);

FunctionScopedExample();
