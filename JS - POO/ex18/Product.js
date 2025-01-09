class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addToStock(qddAdd) {
    this.inStock += qddAdd;
  }
  calculateDiscount(percentagem) {
    console.log(
      `O preço com o desconto é de R$${
        this.price * ((100 - percentagem) / 100)
      } reais`
    );
  }
}

const celular = new Product("Celular", "Vicia as pessoas", 750);
console.log(celular);
celular.addToStock(4);
console.log(celular);
celular.calculateDiscount(60);
