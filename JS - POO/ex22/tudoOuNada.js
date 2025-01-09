const App = require("./App.js");

App.newUser("João Vitor Tomadon Daciuk", "joao.daciuk@gmail.com");
App.newUser("Gabriel Burack Rosa", "burack08@gmail.com");
App.newUser("Matheus Rogerio Pesarini", "patoTicoQuack@gmail.com");

App.deposit("joao.daciuk@gmail.com", 100);

App.transfer("joao.daciuk@gmail.com", "burack08@gmail.com", 20);

App.changeTax(10);
App.loan("patoTicoQuack@gmail.com", 2000, 24);

console.log(App.findUserByEmail("joao.daciuk@gmail.com"));
console.log(App.findUserByEmail("joao.daciuk@gmail.com").account);

console.log(App.findUserByEmail("burack08@gmail.com"));
console.log(App.findUserByEmail("burack08@gmail.com").account);

console.log(App.findUserByEmail("patoTicoQuack@gmail.com"));
console.log(App.findUserByEmail("patoTicoQuack@gmail.com").account);
console.log(
  App.findUserByEmail("patoTicoQuack@gmail.com").account.loanRealized[0]
    .installments
);
