// we can omit parenthesis if we have one argument
const squareArrow2 = x => {
  let square=x*x;
  return square;//explicit return
};
// we can omit bracket and return keyword if we have one return statement.
//implicit return
// 1.put in one line 2.delete curly bracket 3.delete return statement
const squareArrow3 = x => x*x;
squareArrow3(5);//25

// return an object in arrow function in one line 
const makeABaby = (first, last) => {
    return { name: `${first} ${last}`, age: 0 };
  };
// remove curly bracket and return statement 
// const makeABabyBad = (first, last) => { name: `${first} ${last}`, age: 0};//produce an error 
// it thinks that the curly bracket from the baby object is actually the curly bracket from the block of the function.
// put object in parenthesis to make it works
const makeABabyGood = (first, last) => ({ name: `${first} ${last}`, age: 0 });

