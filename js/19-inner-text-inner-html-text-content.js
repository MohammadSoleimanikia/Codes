// inner text change the text of the tag
const innerText=document.querySelector('.innerText').innerText="this is changed by innerText"

//textContent is like innerText but textContent return the every element in the element
//Ex if bold tag was hidden in p tag innerText is not going to return that but textContent does

//we cant add html tag in innerText because it treats them as text
//innerHTML : used to add html to element
const innerHTML=document.querySelector('.innerHTML').innerHTML="changed by innerHTML and this <b> bold text</b> added into it"