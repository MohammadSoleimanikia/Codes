// rest:collects the rest of the values
// collect all remaining argument into an array
//in this case only one argument accepted
function sum (nums)
{
console.log(nums);
}
sum(1,2,3);

// using rest
function sum2 (...nums)
{
console.log(nums);
}
sum2(1,2,3);

// another example
function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}

raceResults("jack","sara","eliot","michele");

// spread vs rest :in spread we spread items in something but in rest we collect things into single params
