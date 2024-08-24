
// way of function declaration:
//function expression (1)
const hello = function () { console.log('hello'); }

// declaration notation(2)
function square(x) {
    return x * x;
  }

//Functions that are declared with the function keyword are called hoisted.
// square function can used before declaration(hoisting)
// hello function can not be used before declaration

//arrow function(3) (shorter , can written in one line, anonymous functions)
const squareArrow = (x) => {
    let square=x*x;
    return square;
  };

  // immediately invoked functional expression.
  // immediately invoke after defining the function with ()
  (function () {
    console.log("Running the Anon function");
    return `Your are cool`;
  })();

// default parameter (its works when didn't pass the name)
function yell(name = "") {
    return `HEY ${name.toUpperCase()}`;
  }
//----------------------------------------------------------------------------->
// higher order functions:they can works with other function
// use function as argument or return function
function callTwice(func) {
    func();
    func();
}
function greet() {
    console.log("greeting");
}
callTwice(greet);


// method: is a function that placed inside an object as properties.
const myMath = {
    PI: 3.14159,
    square: function (x) { return x * x; },
    // we can ignore function keyword
    cube(num) { return num * num * num; }
}
console.log(myMath.square(5));

//"this" keyword
let cat = {
    name: "jomong",
    color: "grey",
    // this refers to object itself.
    meow() { console.log(this.name, "meowed") }
}
cat.meow();
// if we doesn't have name in our object it refer to window object(run in browser)
let meow=function(){console.log(this, "meowed")}
meow();

//number of arguments in function:
var argumentsLength = function(...args) {
    return arguments.length;
};
console.log(argumentsLength(12,23));


// function without return statement returns undefined
function withoutReturn(){
    console.log("this function return undefined")
}
console.log(withoutReturn());

// methods are functions inside the objects
const wes = {
  name: "mohammad",
  sayHi: function () {
    console.log("Hey mohammad!");
    return "Hey mohammad!";
  },
   //Short hand Method(omit function keyword)
   yellHi() {
    console.log("HEY WESSSSS");
  },
};

// this keyword in method
// ((this)) is equal to the object that it was called against
const greeting = {
  name: 'mohammad soleimanikia',
  // Method!
  sayHi: function sayHi() {
    console.log(`Hey ${this.name}`);
    console.log('Hey Wes!');
    return 'Hey Wes!';
  }}

// callback function :
// a function passed as an argument to another function, to be "called back" at a later time
button.addEventListener("click", wes.sayHi);