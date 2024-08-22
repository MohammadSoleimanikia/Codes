// multi line string put backslash at the end of the lines
const message= 'this\
is\
a\
multiline\
text';
// with single quote can't maintain the line break in console
console.log(message);
// with using back tick we can also maintain line break
const message2=`this
is
a 
multiline
with backtick`;
console.log(message2)

// concatenation and interpolation(put a var inside a string)
// before backtick introduced (using + sign)
let firstName="mohammad"
const hello = "hello my name is" + firstName + ". Nice to meet you.";
// with backticks 
const hello2 = `hello my name is ${firstName}. Nice to meet you`;

