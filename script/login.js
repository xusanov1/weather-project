const logoFrom = document.querySelector('#logo-from');
const logoEmail = document.querySelector('#logo-email');
const logoPassword = document.querySelector('#logo-password');


function User (name, email, password,) {
      this.name = name
      this.email = email
      this.password = password
}


const ToastifyP = (message) => {
    return Toastify({
        text: message,
        duration: 3000
    })
}


const regestrNew = (e) => {
     e.preventDefault();
     const newUser = new User(logoEmail.value,logoPassword.vaue)
     fetch("https://api.escuelajs.co/api/v1/users",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body:JSON.stringify(newUser)
     })
     .then(response => response.json())
     .then(data => {
         ToastifyP("Successfully register" ).showToast()
         setInterval(() => {
            location.replace(`http://127.0.0.1:5501/pages/register.html`)
         }, 2000);
     })
     
}



logoFrom.addEventListener("submit", regestrNew)