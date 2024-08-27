// Global variables: available anywhere in the application.
// In the browser, the global scope is called 'window'.
// Methods are globally available, e.g., setTimeout() can be called as window.setTimeout().

// 1. Variables attached to the window object
const one = 1; // 'const' is not attached to the window
let two = 2; // 'let' is also not attached to the window
var three = 3; // 'var' is attached to the window

// console.log(window.one); // undefined, as 'one' is not attached to the window
// console.log(window.two); // undefined, as 'two' is not attached to the window
// console.log(window.three); // 3, as 'three' is attached to the window

// 2. Function scope
const age = 100; // Global variable
function go() {
  const hair = "blonde"; // Function-scoped variable
}
// Accessing global variable
console.log(age); // 100
// console.log(hair); // ReferenceError: hair is not defined, as 'hair' is function scoped and can't be accessed outside of the function

// 3. Shadowing variables
const fName = "jack"; // Global variable
function fname() {
  const fName = "sara"; // This 'fName' shadows the outer 'fName'
  // It first looks inside the function; if there isn't any variable, it looks one level higher
  console.log(fName); // "sara", the inner variable is logged
}
fname(); // Calls the function, outputs "sara"

// 4. Block scoping
if (true) {
  const num = 2; // Block-scoped variable, not accessible outside this block
  let num1 = 5; // Block-scoped variable, not accessible outside this block
  var num2 = 8; // Function-scoped variable, accessible outside this block
}

// 4-1. 'let' variables defined outside a block can be updated inside a block
let cool; // Declared in the global scope
if (1 === 1) {
  cool = true; // Updated inside the block
}
console.log(cool); // true, as 'cool' was updated in the block

// 4-2. 'var' variables are function-scoped, so they can be accessed outside of blocks
function isCool(name) {
  if (name === 'wes') {
    var cool = 'I am cool, initialized inside a block and accessed outside of a block';
  }
  console.log(cool); // Outputs the value of 'cool' if 'name' is 'wes'
  return cool; // Returns the value of 'cool'
}
isCool('wes'); // Calls the function with 'wes', outputs the string
// console.log(num); // ReferenceError: num is not defined, as 'num' is block-scoped
// console.log(num1); // ReferenceError: num1 is not defined, as 'num1' is block-scoped
console.log(num2); // 8, as 'num2' is function-scoped and accessible here

// 5. Closure: allows a function to access variables from an outer function,
// even after the outer function has finished executing.
function outerFunction() {
  var outerVariable = "I'm in the outer function scope"; // Variable in the outer function

  function innerFunction() {
    console.log(outerVariable); // Accessible because of closure
  }

  return innerFunction; // Return the inner function
}

var myInnerFunction = outerFunction(); // Calls outerFunction and returns innerFunction
myInnerFunction(); // "I'm in the outer function scope", outputs the outer variable due to closure

//6-lexical and static scoping 
//that means the way that variable look-up or scope look-up happens, is where the functions are defined,
//  not where they are run.
const dog = 'snickers';
function logDog() {
  console.log(dog);
}
function go() {
  const dog = 'sunny';
  logDog();//called here and not defined so not look up at sunny 
}
go();//sickers


