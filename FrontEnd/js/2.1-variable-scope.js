// Global Scope: Variables declared here can be accessed anywhere in the code.
var x = "global x"; // 'var' is function-scoped or globally scoped.
let y = "global y";  // 'let' is block-scoped.
const z = "global z"; // 'const' is block-scoped and cannot be reassigned.

// Local Scope: This block creates a new scope.
{
    let y = "local y"; // This 'y' is a new variable, scoped only within this block.
    var x = 'scoped x'; // This 'x' reassigns the global 'x', affecting it outside this block.
}

// Function Scope: Variables declared inside a function are local to that function.
function myFunc() {
    const z = "function z"; // This 'z' is local to myFunc and does not affect the global 'z'.
    var x = "function x"; // This 'x' is local to myFunc, but will not affect the global 'x'.
    
    console.log(z); // Logs the local 'z' from myFunc: "function z"
    console.log(x); // Logs the local 'x' from myFunc: "function x"
}

// Accessing global variables
console.log(z); // Logs the global 'z': "global z"
console.log(y); // Logs the global 'y': "global y"

// Calling the function
myFunc(); // Executes myFunc, logging its local variables.

// Accessing the modified global variable
console.log(x); // Logs the modified global 'x': "scoped x"
