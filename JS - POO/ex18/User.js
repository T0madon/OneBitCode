class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    this.email === email && this.password === password
      ? console.log("Login bem sucedido!\n")
      : console.log("Login mal sucedido!\n");
  }
}

const tomadon = new User(
  "João Vitor Tomadon Daciuk",
  "joao.daciuk@gmail.com",
  "slapqtlgd"
);

const burack = new User(
  "Gabriel Burack Rosa",
  "gabriel.burack@gmail.com",
  "elisacaboucomminhavida"
);

console.log(tomadon.login("joao.daciuk@gmail.com", "slapqtlgd"));
