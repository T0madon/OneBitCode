document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // Aqui você pode adicionar a lógica de autenticação
    console.log(`Username: ${username}, Password: ${password}`);
    // Redirecionamento ou lógica adicional após o login
  });
