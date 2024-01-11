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


// filter:create a new array with all elements that pass the test implemented by the provided function
// return statement should return false or true value
let scores=[12,10,18,19,20,10,6];
let goodMarks= scores.filter(score=>{
    return score>15;
});
console.log(goodMarks);//[ 18, 19, 20 ]

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

const badMovies = movies.filter(m => m.score < 70)
console.log(badMovies)

// every and some methods
let exam=[100,80,75,95,50,68];//passing score is 75
console.log(exam.every(score=> score>=75));

// is someone get perfect score
console.log(exam.some(score => score==100));


//reduce method: (every time it return a value saved in first argument)
// use for finding total
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
const total = prices.reduce((total, price) => total + price)
console.log(total);

// use to find min price
const min=prices.reduce((min,price)=>{
    if(price<min){return price;}
    return min;
});
console.log(min);//1.5

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})
