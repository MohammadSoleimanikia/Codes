// first child of the document is <HTML>
console.log(document.firstElementChild)//html

console.log(document.firstElementChild.lastElementChild)//body

// selecting an item (worst way) 
let heading=document.firstElementChild.lastElementChild.firstElementChild//h1 tag

// updating the inner text of an HTML tag
heading.innerHTML="good bye";

// updating the style of the tag
heading.style.color="red"

//0- select an item with query selector selects the first item 
// document.querySelector('li').innerHTML="changed by the query selector";

// 0-select all items that match the selector 
document.querySelectorAll('li');

// 0-1 select complex items
document.querySelector('li a').innerHTML="changed"

// types of selecting in JS
//1-getElementsByTagName returns an array
document.getElementsByTagName('li')[1].innerHTML="selected by the get element by tag name"

//2-getElementsByClassName returns an array
document.getElementsByClassName('btn')[0].innerHTML="btn selected by class name"

// 3- select element by id :returns one value
document.getElementById('para').innerHTML="selected by id selector"
