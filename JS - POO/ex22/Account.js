module.exports = class Account {
  #balance;

  constructor(owner) {
    this.#balance = 0;
    this.owner = owner;
    this.depositsRealized = [];
    this.loanRealized = [];
    this.transferRealized = [];
  }

  get saldo() {
    return this.#balance;
  }

  newDeposit(deposito) {
    this.#balance += deposito.value;
    this.depositsRealized.push(deposito);
  }

  newLoan(emprestimo) {
    this.#balance += emprestimo.value;
    this.loanRealized.push(emprestimo);
  }

  newTransfer(transferencia) {
    if (transferencia.userReceive.email === this.owner.email) {
      this.#balance += transferencia.value;
    } else if (transferencia.userSend.email === this.owner.email) {
      this.#balance -= transferencia.value;
    }

    this.transferRealized.push(transferencia);
  }
};
