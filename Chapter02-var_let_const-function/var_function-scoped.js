var a = 10;
console.log(a);
function FunctionScopedExample() {
    console.log("Sujit Das");
    var a = 20;
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a)
    }
    console.log("This value is due to FunctionScoped Naiture:", a); // O/P 30
}
console.log("G ->", a);

FunctionScopedExample();
