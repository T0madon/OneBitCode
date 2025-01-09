const Character = require("./Character.js");

module.exports = class Mage extends Character {
  constructor(name, life, attackP, defense, magic) {
    super(name, life, attackP, defense);
    this.magic = magic;
  }

  attack(target) {
    target.life -= this.attackP + this.magic - target.defense;
  }

  cure(target) {
    target.life += 2 * this.magic;
  }
};
