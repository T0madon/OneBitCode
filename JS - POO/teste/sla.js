class Loan {
  static #tax = 0.1;

  constructor(value, date, numOfInstallment, ...installments) {
    this.value = value;
    this.date = date;
    this.installments = installments.reduce(
      sum,
      ({ value, situation }) => {
        if (situation === "pendente") {
          return value;
        }
      },
      0
    );
  }

  static get taxa() {
    return Loan.#tax;
  }

  static set newTax(percent) {
    this.#tax = percent / 100;
  }
}

const meuEmprestimo = new Loan(1000, "13/01/2024", 12);
