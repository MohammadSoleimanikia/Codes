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