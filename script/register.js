const regestrForm = document.querySelector("#regestr-form");
const regestrName = document.querySelector("#regestr-name");
const regestrEmail = document.querySelector("#regestr-email");
const regestrPasseord = document.querySelector("#regestr-password");
const regestrAvatar = document.querySelector("#regestr-avatar");

function User(name, email, password, avatar) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.avatar = avatar;
}

const ToastifyP = (message) => {
  return Toastify({
    text: message,
    duration: 3000,
  });
};

const regestrNew = (e) => {
  e.preventDefault();
  const newUser = new User(
    regestrName.value,
    regestrEmail.value,
    regestrPasseord.value,
    regestrAvatar.value
  );
  fetch("https://api.escuelajs.co/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((data) => {
      ToastifyP("Successfully register").showToast();
      setInterval(() => {
        location.replace(`http://127.0.0.1:5501/pages/login.html`);
      }, 2000);
    });
};

regestrForm.addEventListener("submit", regestrNew);
