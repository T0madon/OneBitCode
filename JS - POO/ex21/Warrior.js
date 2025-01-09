const Character = require("./Character.js");

module.exports = class Warrior extends Character {
  constructor(name, life, attackP, defense, shield, position) {
    super(name, life, attackP, defense);
    this.shield = shield;
    this.position = position;
  }

  attack(target) {
    if (this.position === "Ataque") {
      super.attack(target);
    } else {
      console.log("A posição atual é de defesa");
    }
  }

  changePosition() {
    if (this.position === "Ataque") {
      this.position = "Defesa";
      this.defense += this.shield;
    } else {
      this.position = "Ataque";
      this.defense -= this.shield;
    }
  }
};
