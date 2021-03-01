const link = document.querySelector(".button-address");
const popup = document.querySelector(".modal");
const close = popup.querySelector(".modal-close");

const form = popup.querySelector(".modal-form");
const login = popup.querySelector(".modal-input-login");
const mail = popup.querySelector(".modal-input-mail");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-show");
      if (storage) {
        login.value = storage;
        mail.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (event) {
        if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        console.log("Нужно ввести имя и электронную почту");
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
        localStorage.setItem("mail", password.value);
    }
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});
