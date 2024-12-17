const form = document.querySelector('form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch('https://crudcrud.com/api/76583f55c8504ad3b91c2ed54df6d1ef/users', {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
    })
    .then(res => res.json())  
    .then(responseData => {
        
        localStorage.setItem('UserId', responseData._id);  
        localStorage.setItem('username', responseData.Username)
        localStorage.setItem('password', responseData.password)

        console.log("Foydalanuvchi ID'si saqlandi:", responseData._id);
        
        
        window.location.href = `http://127.0.0.1:5500/myProjets.html`;
    })
    .catch(err => console.log("Xatolik:", err));
});
