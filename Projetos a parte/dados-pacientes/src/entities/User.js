export default class UserDatas {
  constructor({ name, age, cellphone, keyWord, description, start, end }) {
    this.id = Math.floor(Math.random() * 1000000);
    this.name = name;
    this.age = age;
    this.cellphone = cellphone;
    this.keyWord = keyWord;
    this.description = description;
    this.start = start;
    this.end = end;
  }
}
