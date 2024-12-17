const myProjects = document.querySelector('#myProjects');



myProjects.addEventListener('click', (e) =>{
    window.location.href = "https://127.0.0.1:5500/myProjects.html";
});



const form1 = document.querySelector('.form1')
const url = document.querySelector('#url')
const text = document.querySelector('#text')
const job = document.querySelector('#job')
const date = document.querySelector('#date')
const textarea = document.querySelector('#desc')


const img2 = document.querySelector(".img")
const name2 = document.querySelector('.name')
const job2 = document.querySelector('.job')
const date2 = document.querySelector('.date')
const message = document.querySelector('.message')


const saveBtn = document.querySelector('#saveBtn')




url.addEventListener('input', (e) =>{
    img2.src = url.value;
})

text.addEventListener('input', (e) =>{
    name2.textContent = text.value
})

job.addEventListener('input', (e) =>{
    job2.textContent = job.value
})

date.addEventListener('input', (e) =>{
    date2.textContent = date.value
})

textarea.addEventListener('input', (e) =>{
    message.textContent = textarea.value
})



form1.addEventListener('submit', (e) =>{
    e.preventDefault()

    const Data = new FormData(form1);

   const data = Object.fromEntries(Data.entries())    
   
   fetch('https://crudcrud.com/api/76583f55c8504ad3b91c2ed54df6d1ef/projects', {
    headers: {
        "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
   }).then((res) =>console.log('Ma\'lumot muvaffaqiyatli saqlandi'))
   .catch((err) => console.log('Xato yuz berdi'));


      window.location.href = "https://127.0.0.1:5500/myProjects.html";
});