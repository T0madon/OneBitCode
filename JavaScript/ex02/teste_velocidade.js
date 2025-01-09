const car1 = prompt("Insira o nome do veículo 1: ");
const vel1 = parseFloat(prompt("Insira a velocidade do veículo 1 (km/h): "));
const car2 = prompt("Insira o nome do veículo 2: ");
const vel2 = parseFloat(prompt("Insira a velocidade do veículo 2 (km/h): "));

if (vel1 > vel2) {
  alert(
    "O veículo " + car1 + " é mais rápido\nCom velocidade de " + vel1 + "km/h"
  );
} else if (vel2 > vel1) {
  alert(
    "O veículo " + car2 + " é mais rápido\nCom velocidade de " + vel2 + "km/h"
  );
} else {
  alert("A velocidade dos dois veículos são iguais");
}
