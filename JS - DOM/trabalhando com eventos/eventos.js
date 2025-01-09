function register(ev) {
  console.log(ev);
  const sectionElement = ev.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const confirmPassword = sectionElement.children.confirmPassword.value;

  if (password === confirmPassword) {
    alert("Usuário " + username + " registrado!");
  } else {
    alert("As senhas não batem!");
  }
}

const button = document.getElementById("register-button");

button.addEventListener("click", register);

button.addEventListener("mouseover", function (ev) {
  console.log(ev.currentTarget);
});

function removeListener() {
  button.removeEventListener("click", register);
  alert("Evento Removido");
}
