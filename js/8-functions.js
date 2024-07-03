// variables in function are scoped to the function.(local)
function firstName() {
    let personName = "jack";
    return personName;
}
console.log((firstName()));//jack
// console.log(personName); cause error because name is undefined

// way of function declaration
//function expression (1)
const hello = function () { console.log('hello'); }

// declaration notation(2)
function square(x) {
    return x * x;
  }

//arrow function(3)
const squareArrow = (x) => {
    let square=x*x;
    return square;
  };
// we can omit parenthesis if we have one argument
const squareArrow2 = x => {
    let square=x*x;
    return square;
  };
// we can omit bracket and return keyword if we have one return statement.
const squareArrow3 = x => x*x;
squareArrow3(5);//25

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


//call stack
