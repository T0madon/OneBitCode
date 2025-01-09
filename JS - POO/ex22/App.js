const Account = require("./Account");
const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");
const User = require("./User");

module.exports = class App {
  static #users = [];

  static findUserByEmail(email) {
    const user = this.#users.find((user) => user.email === email);
    return user ?? null;
  }

  static newUser(name, email) {
    const userExists = App.findUserByEmail(email);

    if (!userExists) {
      this.#users.push(new User(name, email, 0));
    }
  }

  static deposit(email, value) {
    const user = App.findUserByEmail(email);
    if (user) {
      const newDeposit = new Deposit(value);
      user.account.newDeposit(newDeposit);
    }
  }

  static transfer(userSendEmail, userReceiveEmail, value) {
    const userSend = App.findUserByEmail(userSendEmail);
    const userReceive = App.findUserByEmail(userReceiveEmail);

    if (userReceive && userSend) {
      const newTransfer = new Transfer(value, userSend, userReceive);
      userSend.account.newTransfer(newTransfer);
      userReceive.account.newTransfer(newTransfer);
    }
  }

  static loan(email, value, numOfInstallment) {
    const user = App.findUserByEmail(email);

    if (user) {
      const newLoan = new Loan(value, numOfInstallment);
      user.account.newLoan(newLoan);
    }
  }

  static changeTax(novaTax) {
    Loan.newTax = novaTax;
  }
};
