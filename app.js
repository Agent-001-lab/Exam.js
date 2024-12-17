const createBtn = document.querySelector('#createBtn')
const leftBtn = document.querySelector('#leftBtn')
const rightBtn = document.querySelector('#rightBtn')


createBtn.addEventListener('click', (e) =>{
    window.location.href = 'http://127.0.0.1:5500/signUpPage.html';
});


leftBtn.addEventListener('click', (e) =>{
    window.location.href = 'http://127.0.0.1:5500/signUpPage.html'
});


rightBtn.addEventListener('click', (e) =>{
    window.location.href = "http://127.0.0.1:5500/login.html";

});
