//==================================
//querySelector(new) can used instead of tag , class or id 
// querySelector for one and querySelectorAll for all items
//==================================
//by tag
const querySel =document.querySelector('h3').innerText="new text";
//by class
const querySelCls =document.querySelector('.query').innerText="by query class";
//by id
const querySelId =document.querySelector('#query').innerText="by query id";

//chain with css
const queryCss=document.querySelector("li:nth-of-type(2)").innerText=" selected by query with css chaining"

//select by attribute 
const queryCssAtt=document.querySelector("input[type='password']").placeholder="select by attribute";

//descendant selector
const queryCssDesc=document.querySelector("p b").style.color="red";

