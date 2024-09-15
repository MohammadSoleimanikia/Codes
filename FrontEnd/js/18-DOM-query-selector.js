//==================================
//querySelector(new) can used instead of tag , class or id 
// querySelector for one and querySelectorAll for all items
//==================================
//by tag
const querySel =document.querySelector('h3').innerText="query select tag name";
//by class
const querySelCls =document.querySelector('.query').innerText="query select class";
//by id
const querySelId =document.querySelector('#query').innerText="query select by id";

//chain with css
const queryCss=document.querySelector("li:nth-of-type(2)").innerText=" query with css chaining nth-of-type"

//select by attribute 
const queryCssAtt=document.querySelector("input[type='password']").placeholder="select by attribute";

//descendant selector
const queryCssDesc=document.querySelector("p b").style.color="red";

