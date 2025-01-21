// Destructuring in JavaScript

// 1. Destructuring in Array
const fruits = ['Apple', 'Banana', 'Cherry'];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit); // Output: Apple
console.log(secondFruit); // Output: Banana
console.log(thirdFruit); // Output: Cherry

// 2. Destructuring in Object
const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};
const { name, age, city } = person;
console.log(name); // Output: John Doe
console.log(age); // Output: 30
console.log(city); // Output: New York

// 3. Destructuring in Function Parameter List
function displayPerson({ name, age, city }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}
const anotherPerson = {
    name: 'Jane Doe',
    age: 25,
    city: 'Los Angeles'
};
displayPerson(anotherPerson); // Output: Name: Jane Doe, Age: 25, City: Los Angeles