// making random function that returns a number to argument
function random(max) {
    return (Math.floor(Math.random() * max) + 1);
}
console.log(random(10));

// variables in function are scoped to the function.
function firstName() {
    let personName = "jack";
    return personName;
}
console.log((firstName()));
// console.log(personName); cause error because name is undefined

//function expression 
const hello = function () { console.log('hello'); }
hello();

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