// a compact alternative to a regular function expression
//regular 
const add = function (x, y) {
    return x + y;
}
// arrow function
const sum = (x, y) => {
    return x + y;
}

//if we have one argument we can ignore parenthesis
const square=x=>{return x*x}

// implicit return:we can remove return and wrap returned value in parenthesis
// !!only one line of code should be in the function
const cube=x=>(x*x*x)
console.log(cube(2))

// we can also remove parenthesis if write all codes in one line
const pow=x=>x*x
console.log(pow(4));