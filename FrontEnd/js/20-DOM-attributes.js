//1-change attribute directly(id)
const nav = document.querySelector("#nav").id = "newId";

//2-getAttribute is another way to get an attribute 
const nav1 = document.querySelector("#nav1").setAttribute('id','newId1');

const pass=document.querySelector('#pass').setAttribute('type','password');
