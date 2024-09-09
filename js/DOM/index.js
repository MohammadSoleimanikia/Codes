// first child of the document is <HTML>
console.log(document.firstElementChild)//html

console.log(document.firstElementChild.lastElementChild)//body

// selecting an item (worst way) 
let heading=document.firstElementChild.lastElementChild.firstElementChild//h1 tag

// updating the inner text of an HTML tag
heading.innerHTML="good bye";

// updating the style of the tag
heading.style.color="red"

//1- select an item with query selector selects the first item 
// document.querySelector('li').innerHTML="changed by the query selector";

//1-1select all items that match the selector 
document.querySelectorAll('li');

// 1-2 select complex items
document.querySelector('li a').innerHTML="changed"

// types of selecting in JS
//1-3 getElementsBy TagName returns an array
document.getElementsByTagName('li')[1].innerHTML="selected by the get element by tag name"

//1-4getElementsBy ClassName returns an array
let btn=document.getElementsByClassName('btn')[0];
btn.innerHTML="btn selected by class name"

// 1-5 select element by id :returns one value
document.getElementById('para').innerHTML="selected by id selector"

//2 changing style of elements 
// instead of '-' we use camel casing font-size =>fontSize
btn.style.color='blue';

//3- separation on concerns HTML for content structure, CSS for styling and presentation, 
// and JavaScript for behavior and interactivity (not OK to change style in JS)
// instead add class to the items (see style.css)
btn.classList.add('border-rounded');

// 4-toggle -> remove class if available and add if isn't available
btn.addEventListener('click',()=>{
    btn.classList.toggle('red-bg');
})   

//5- text manipulation and text content property 
let title=document.getElementById('title');
// <h2 id="title"> this is <strong>title</strong></h2>
console.log(title.innerHTML);//  this is <strong>title</strong>
console.log(title.innerText);//this is title ->omit the html tags

// with innerHTML we can add html codes too 
title.innerHTML="<em>this</em> changed by the JS "

//6- manipulate attribute (class,href,src and etc)
let bing=document.getElementById('bing');
// attributes give us a set of attributes
// bing.attributes
// getAttributes('attribute) choose a single attribute
// setAttribute("attribute",new value) set an attribute
bing.setAttribute('href','https://google.com')

// 7-play music in JS
let drum=document.getElementById('drum');
drum.addEventListener('click',()=>{
    var audio = new Audio('./tom-1.mp3');
    audio.play();
})
