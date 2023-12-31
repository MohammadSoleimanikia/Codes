// Making an array:
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// Important array methods:
//push(value) - adds value to the END of an array
colors.push("blue");
console.log(colors);//[ 'red', 'orange', 'yellow', 'blue' ]

//pop() - removes and returns last value in array
console.log(colors.pop());//blue

//unshift(val) - adds value to START of an array
colors.unshift("magenta");//[ 'magenta', 'red', 'orange', 'yellow' ]
console.log(colors);

//shift() - removes and returns first element in an array
console.log(colors.shift());//magenta


//concat - merge arrays
let women = ['sara', 'jenifer'];
let men = ['jack', 'peter'];
let people = women.concat(men);
console.log(people);

// includes - look for a value
console.log(women.includes('sara'));//true

// indexOf - just like string.indexOf
console.log(women.indexOf('sara'));//0 and give us -1 if didn't found item

// reverse - reverses an array
console.log(women.reverse());

// slice(start,end)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.slice(2, 5));//3,4,5
console.log(numbers.slice(4));//[ 5, 6, 7, 8, 9 ]
console.log(numbers.slice(-3));//[ 8, 9, 10 ]
// splice change the contents of an array by removing or replacing existing elements or add a new element
// splice(start,number of removal,item we want to add
let month=['farvardin','ordibehesht','tir','mordad']
month.splice(2,0,'khordad');
console.log(month);

numbers.splice(5,5);//start from 5 and remove 5 item
console.log(numbers);

//replace with splice
month.splice(0,1,'january')
console.log(month);

//equality of arrays
let a=[1,2,3];
let b=[1,2,3];
console.log(a==b);//false because references are compared 
a=b;
console.log(a==b);//true
//any changes that happens to a applied to b too

const names=['ali'];
names.push('mohammad');//we can change const array because js didn't care about the content it cares about reference
// names=['sara','nichole']; we can change but we can't reassign to that.
