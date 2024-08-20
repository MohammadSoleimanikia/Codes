// 1-number
1;
1.54;
-1.54;
let num=5;
// checking if the value is number
console.log("number:",!Number.isNaN(num));
//1-1-math
2+2;
2/2;
// power
2**2==4;
Math.pow(2,5)==32;

// remove decimals
Math.floor(5.999)==5;

//random number between 1 and 10
var step1=Math.random();
var step2=step1*10;
var step3=Math.floor(step2);
var step4=step3+1;

Math.floor(Math.random()*10)+1;

// convert string to int(removes floating number too)
parseInt("12.5")==12;
// convert to number and keeps the floating number
parseFloat('12.5')==12.5;
//Modulo
10%4==1;
// round
Math.round(5.9)==6;

// absolute value
Math.abs(-10)==10;
// NAN not a number
0/0==NaN;

// 2-string
// Making Strings
let color = "purple";

//Strings have a length:
city.length; //5

//We can access specific characters using their index:
city[0]; //'T'
city[3]; //'y'

// String methods:
'hello'.toUpperCase(); // "HELLO";
'LOL'.toLowerCase(); // "lol"
'    omg  '.trim(); // "omg"

// String methods with arguments:
// ==============================
//indexOf returns the index where the character is found (or -1 if not found)
'spider'.indexOf('i'); //2
'vesuvius'.indexOf('u'); //3 - only returns FIRST matching index
'cactus'.indexOf('z'); //-1 not found

// slice - returns a "slice" of a string
"pancake".slice(3); //"cake" - slice from index 3 onwards
"pancake".slice(0, 3); //"pan" - slice from index 0 up to index 3

// replace - returns a new string, with the FIRST match replaced
"pump".replace("p", "b"); //"bump" - only replaces first "p"

// String Template Literals
// Use backtick characters, NOT SINGLE QUOTES!
// with template we can use vars in our string
const msg = `My favorite color is: ${color}` //"My favorite color is: olive green"

const str = `There are ${60 * 60 * 24} seconds in a day`//"There are 86400 seconds in a day"

// 3-boolean
true;
false;

// 4-null
// absence of value and must be assigned
let loggedInUser=null;
loggedInUser="mohammad soleimanikia"

// 5-undefined
// Variables that do not have an assigned value
let name;//we didn't assign the value
