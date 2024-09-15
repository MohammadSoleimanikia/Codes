//Document Object Model

//===============================
//selecting DOM element
//===============================

//getElementById
const text = document.getElementById('selectId').innerText = "get element by ID";

//we can also getElementByTagName and this return us an html collection 
const tag = document.getElementsByTagName('h4')[0].innerText = "get element by tag selection"

//getElementByClassName is like getElementByTagName
const Cls = document.getElementsByClassName('center')[0].innerText = "get element by class"
