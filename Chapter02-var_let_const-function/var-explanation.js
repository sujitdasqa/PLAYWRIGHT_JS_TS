//var is "function-scope" can be "Redeclared" can be "Re-assigned"  and gets hosted to the top of the scope.
var a = 28;  //Global Scope
// var is function scope

console.log(a);

var browser = 'chrome';
var browser = 'firefox'; // Redeclaration allowed
browser = 'edge'; // Re-assignment allowed

function HelloMessage() {
    console.log("Hello Test Message");
    var a = 20;  // Local Scope
    console.log(a);
}

HelloMessage();


