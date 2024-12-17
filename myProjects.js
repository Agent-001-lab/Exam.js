"use strict"
const title = document.querySelector('.title')
const logoutBtn = document.querySelector('.logoutBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const cards = document.querySelector('.cards');
const addCard = document.querySelector('.addCard')


addCard.addEventListener('click', (e) =>{
    window.location.href = "http://127.0.0.1:5500/create.html";
})

    fetch('https://crudcrud.com/api/76583f55c8504ad3b91c2ed54df6d1ef/projects')
    .then(response => response.json())
    .then(data =>{
    const addCard = document.querySelector('.addCard')        
        
    data.forEach(item => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.style.backgroundImage = `url(${item.imgUrl})`
        card.textContent = item.Username;
    title.textContent = `${item.Username}`
        cards.append(card)
    })
    }).catch(err => console.log(err));
    




logoutBtn.addEventListener('click', (e) =>{
    window.location.href = 'http://127.0.0.1:5500/index.html';
});



deleteBtn.addEventListener("click", (e) => {

      localStorage.clear();
  
      window.location.href = "http://127.0.0.1:5500/index.html";
});