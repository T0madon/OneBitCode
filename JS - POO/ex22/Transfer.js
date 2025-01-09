module.exports = class Transfer {
  constructor(value, userSend, userReceive) {
    this.value = value;
    this.date = new Date();
    this.userSend = userSend;
    this.userReceive = userReceive;
  }
};
