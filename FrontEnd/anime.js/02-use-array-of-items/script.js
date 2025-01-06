const box=document.getElementById('box');
box.addEventListener('click',()=>{
    anime({
        // we can use an array of items as anime.js
        targets: ['#box', '#box1'],
        translateX: 250
    });
})