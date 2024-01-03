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
// 3- for .. of using for iterating over an array
let animals=['dog','cat','monkey'];
for(item of animals){
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
// 4- for .. in 