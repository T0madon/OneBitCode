//Soma padrão

function somaNormal(a, b) {
  return a + b;
}
console.log(`Soma padrão: ${somaNormal(2, 2)}`);

//Soma com função anônima

const somaAnonima = function (a, b) {
  return a + b;
};
console.log(`Soma anônima: ${somaAnonima(2, 2)}`);

//Soma com Arrow Function

const somaArrow = (a, b) => a + b;
console.log(`Soma com Arrow Function: ${somaArrow(2, 2)}`);

//Arrow Function sem parâmetros

const dobro = (n) => `O dobro de ${n} é ${n * 2}`;
const number = 21;
console.log(dobro(number));

//Arrow Function com High Order Functions

const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

const comecaComP = towns.filter((town) => town[0] === "P");

console.log(comecaComP);
