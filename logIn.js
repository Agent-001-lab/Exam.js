"use strict"
const form = document.querySelector('form')
const username = document.querySelector('#username')
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

        let usernameToFind = username.value;
        let passwordToFind = password.value;

        let storedName = localStorage.getItem('username')
        let storedPassword = localStorage.getItem('password')

        if (storedName === usernameToFind && storedPassword === passwordToFind) {
            window.location.href = `http://127.0.0.1:5500/myProjets.html`;
        } else {
            alert("Foydalanuvchi topilmadi!");
        }
});
