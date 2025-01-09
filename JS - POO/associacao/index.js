const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("7 de setembro", 99, "Uvaranas", "Ponta Grossa", "PR");
const tomas = new Person("Tomadon", addr);

console.log(tomas);
console.log(tomas.address.fullAddress());
