function validaEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    const err = new Error("Email inválido");
    err.input = "email";
    throw err;
  }
}

function validaSenha(senha) {
  if (
    senha.length < 8 ||
    !senha.match(/[a-z]/) ||
    !senha.match(/[A-Z]/) ||
    !senha.match(/\d/) ||
    !senha.match(/[^a-zA-Z0-9\s]/)
  ) {
    const err = new Error("Senha inválida.");
    err.input = "password";
    throw err;
  }
}

function resetFormStyles(user) {
  Object.entries(user).forEach(([key, value]) => {
    value.classList.remove("success", "error");
    document.querySelector(`#${key}-error`).textContent = "";
  });
}

const userInputs = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
};

const form = document.querySelector("form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  resetFormStyles(userInputs);
  try {
    userInputs.name.classList.add("success");
    validaEmail(userInputs.email.value);
    userInputs.email.classList.add("success");
    validaSenha(userInputs.password.value);
    userInputs.password.classList.add("success");
  } catch (err) {
    userInputs[err.input].classList.add("error");
    document.querySelector(`#${err.input}-error`).textContent = err.message;
  }
});
