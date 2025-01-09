function register(element) {
  const name = element.children.name.value;
  const password = element.children.password.value;
  const confirmPassword = element.children.confirmPassword.value;

  if (password === confirmPassword) {
    alert(name + " registrado com sucesso!");
    return;
  }
  alert("As senhas não estão iguais!");
}
