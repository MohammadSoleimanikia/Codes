// example for eloquent javascript book
// Write a program that uses console.log to print all the numbers from 1 to 100,
//  with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, 
//  and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible 
// by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// solution #1
// for(let i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//         continue
//     }
//     if(i%3==0){
//         console.log("Fizz");
//         continue
//     }
//     if(i%5==0){
//         console.log("Buzz");
//         continue
//     }
//     console.log(i);
// }

// solution #2 (better solution)
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }