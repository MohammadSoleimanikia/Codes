// spread(...) allows an iterable as array to e expanded in places.

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