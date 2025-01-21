// Spread syntax example

// Spread in function calls
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
// Using spread operator to pass array elements as individual arguments
console.log(sum(...numbers)); // 6

// Spread in array literals
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Using spread operator to combine arrays
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // [1, 2, 3, 4, 5, 6]

// Spread in object literals
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
// Using spread operator to combine objects
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }

// spread(...) allows an iterable such as an array to be expanded in places.

// expand an iterable(array,string ...) into a list of argument
console.log(Math.max(1,2,3));//3

let nums=[1,2,3]
console.log(Math.max(nums));//NaN. we should use spread to spread nums as arguments
console.log(Math.max(...nums));//3

// merge arrays with spread
let cat=['blue','rocket','scout'];
let dog=['rusty','wyatt'];

let pets=[...cat,...dog];
console.log(pets);

// copy properties from one object into another object.
const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }