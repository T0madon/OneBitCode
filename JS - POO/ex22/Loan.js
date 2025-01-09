const Installment = require("./Installment");

module.exports = class Loan {
  static #tax = 1.05;

  constructor(value, numOfInstallment) {
    this.value = value;
    this.date = new Date();
    this.installments = [];

    for (let i = 1; i <= numOfInstallment; i++) {
      this.installments.push(
        new Installment((value * Loan.#tax) / numOfInstallment, i)
      );
    }
  }

  static get taxa() {
    return Loan.#tax;
  }

  static set newTax(percent) {
    Loan.#tax = 1 + percent / 100;
  }
};
