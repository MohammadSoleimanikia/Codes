// To make an object literal:
const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
}
// All keys will be turned into strings!

// To retrieve a value:
dog.age; //7
dog["age"]; //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;

//nesting objects inside of the array
let comments = [
    { username: 'tamy', text: 'that was epic', vote: 9 },
    { username: 'jack', text: 'lol!', vote: 10 }]
console.log(comments[1].username);

// nesting arrays in object 
let student = { name: 'ali', grades: [80, 75] };
console.log(student.grades[0])