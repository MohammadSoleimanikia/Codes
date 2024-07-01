// 1- for
for(let i=1;i<=10;i++)
{
    console.log(i);
}
// 2- while
let num=0;
while(num<=10){
    console.log(num);
    num++;
}
// break keyword
let j=0;
while(true){
j++
console.log("j is",j);
if (j==7){
    break;
}
}
// 3- for .. of using for iterating over an array
let animals=['dog','cat','monkey'];
for(item of animals){
    console.log(item);
}

//reverse order :
for(item of animals.reverse()){
    console.log(item);
}

// using for nested arrays
let nested=[
    [11,12,13],
    [21,22,23],
    [31,32,33]
]
for (row of nested){
    for(item of row){
        console.log(item);
    }
}
// 4- for .. in give us the key in the objects
    // objects are not iterable 
let marks={
    ali:10,
    sara:15,
    ahmad:12
}
for(person in marks){
    console.log(person);
    console.log(marks[person]);
}

// continue key word skips one iteration
for(let j=0;j<10;j++)
    {
    //the code skip the number if divided by 2(even numbers)
        if(j%2==0){continue}
        console.log("this is an odd number:",j);
    }