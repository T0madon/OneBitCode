let cont = 0;

do {
  let numero = parseFloat(prompt("Insira um número a ser calculada a tabuada"));
  let resultado = "";
  let conta;

  for (let i = 1; i <= 20; i++) {
    conta = numero * i;
    resultado += numero + " * " + i + " = " + conta + "\n";
  }

  cont = parseFloat(
    prompt("O resultado foi de: \n" + resultado + "\n1 - sair")
  );
} while (cont !== 1);
