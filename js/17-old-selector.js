//Document Object Model

//===============================
//selecting DOM element
//===============================

//getElementById
const text = document.getElementById('selectId').innerText = "this is changed by js";

//we can also getElementByTagName and this return us an html collection 
const tag = document.getElementsByTagName('h3')[0].innerText = "this is changed by tag selection"

//getElementByClassName is like getElementByTagName
const Cls = document.getElementsByClassName('center')[0].innerText = "this is changed by tag selection"
