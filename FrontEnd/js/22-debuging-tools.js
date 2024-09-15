// console: instead of console.log() use console.error
// 1.give you stack trace 2.give a little eye and circle beside the console
console.error('hello');
console.log('hello');

// console.table used for list of items and the objects have the same property 
let people=[
    {firstName:"ali",cool:false,age:25},
    {firstName:"mohammad",cool:true,age:28},
    {firstName:"sara",cool:true,age:27}
];
console.table(people);

// console.count used for when we want to count number of function running
function hello(){
    1+1//something
    console.count();
}
hello();
hello();
hello();//3
// if we give parameter it will count that parameter
function hello(firstName){
    console.count(firstName);
}
hello('mohammad');
hello('mohammad');
hello('jack');

// console.group and console.groupEnd used to group number of consoles
function doStuff(){
    console.group("Doing some stuff");
    console.log("in group 1");
    console.log("in group 2");
    console.log("in group 3");
    console.groupEnd("Doing some stuff");
}
doStuff();
console.log('out of group')
// use group for people
people.forEach((person, index) => {
    console.group(`${person.firstName}`);
    console.log(person.cool);
    console.log(person.age);
    console.groupEnd(`${person.name}`);
  });   

//2- grabbing element in web
// if we click inspect on the one element in chrome in console we can access that by typing $0
// tag value
// ! its works only in console in web
$0.value

// next element
$1

// 3-breakpoints
// !its works only in web if dev tools are open
// add debugger; in your code when code reached to this pause from running
 
