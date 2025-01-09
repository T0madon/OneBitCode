const Character = require("./Character.js");

module.exports = class Thief extends Character {
  attack(target) {
    target.life -= 2 * (this.attackP - target.defense);
  }
};
