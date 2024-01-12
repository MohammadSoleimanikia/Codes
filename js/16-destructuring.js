// if we want to extract value from an array we could do this (old way)
let fruits=['apple','water melon','kiwi'];
// colors
let yellow=fruits[0];
let red=fruits[1];
console.log(red);

// or we can use destructuring way (newer)
let scores =[100,80,40,70];
let [great,good,bad]=scores;
console.log(bad);

// using with 'rest' operator
let liftingScores=['250kg','200kg','180kg','150kg'];
let [worldRecord,...anyOneElse]=liftingScores;
console.log(worldRecord);
console.log(anyOneElse);

//================================
// destructuring from object
//================================
//when we want to extract some attributes from an object
let user ={
    firstName:"ali",
    lastName:"gator",
    email:"aligator@example.com",
    password:"ASdf1@rf",
    born:1980
}

// old way 
// const firstName=user.firstName;
// const lastName=user.lastName;

//new way:
const {firstName,lastName,email}=user;
console.log(firstName,lastName,email);//ali gator aligator@example.com

// if we want to name of var is differ from the original
// {nameInObject:newName=defaultValue}=objectName
const {password:pass,born:birthDate,death='notUsed'}=user;
console.log(pass,birthDate,death);

//destructuring in function argument.
// if we have big object and just want to pass some of its attributes we use this 
//=========================
//pass the full object
//========================
// function fullName(user){
//     console.log(user.firstName);
// }


// =========================
// pass the essentials only
//==========================
// use default for 
function fullName({firstName,lastName})
{
    console.log(`${firstName} ${lastName}`);
}
fullName(user);



const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

//we can use destructuring to ignore movie
// movies.filter((movie) => movie.score >= 90)
// movies.filter(({ score }) => score >= 90)


// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})