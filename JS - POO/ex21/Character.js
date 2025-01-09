module.exports = class Character {
  constructor(name, life, attackP, defense) {
    this.name = name;
    this.life = life;
    this.attackP = attackP;
    this.defense = defense;
  }

  attack(target) {
    target.life -= this.attackP - target.defense;
  }
};
