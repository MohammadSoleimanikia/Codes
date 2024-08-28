// hoisting:access function and variables before they have been created
//1-hoisting function declaration:
sayHi();
//the JavaScript compiler will take all of your function declarations and move 
// them to the top of the file so they are all available before you use them.
function sayHi() {
  console.log("hii!");
}

// 2- variable hoisting 
// JavaScript hoists the declaration to the top of its scope. However, it does not hoist the assignment of the value.
console.log(age); // Output: undefined
var age = 10;//Declarations are hoisted and initialized to undefined. Assignments are not hoisted

console.log(age2); // Output: Uncaught ReferenceError: Cannot access 'age' before initialization
let age2 = 10;//Declarations are hoisted but not initialized. Accessing them before their declaration results in a ReferenceError.
