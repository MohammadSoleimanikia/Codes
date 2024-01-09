// foreach method 
// calls the function once per element in array
let nums=[1,2,3,4,5,6];
let square=[];
nums.forEach(function(num){square.push(num*num)});
console.log(square)

// it is better to use for of. for of is newer
for(num of nums){
    console.log(num);
}

//map:creates new array with the result of calling a callback on each item
let words=['hi','great','cat','dog'];
let caps=words.map(function(word){return word.toUpperCase();})
console.log(caps);

