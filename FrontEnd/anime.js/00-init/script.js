var box = document.getElementById('box');
box.addEventListener('click', () => {
    anime({
        targets: '#box',
        translateX: 200,
        backgroundColor: '#e74c3c',
        duration: 2000,
    });
})
