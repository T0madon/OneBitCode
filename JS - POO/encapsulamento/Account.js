class Account {
  #password;
  #balance = 50;
  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      return null;
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}

const user = {
  email: "joao.daciuk@gmail.com",
  password: "123456",
};

const myAccount = new Account(user);

console.log(myAccount);
console.log(myAccount.getBalance("joao.daciuk@gmail.com", "123456"));
