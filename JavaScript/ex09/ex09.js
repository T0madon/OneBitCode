let opcao = 0;

function ret(base, altura) {
  return base * altura;
}

function quadrado(lado) {
  return lado * lado;
}

function trapezio(b_maior, b_menor, altura) {
  return (b_maior + b_menor) * altura;
}

function circulo(raio) {
  return 3.14 * raio * raio;
}

do {
  let resultado;
  opcao = parseFloat(
    prompt(
      "*****MENU*****\n     CALCULADORA     \n1-Área do triângulo\n2-Área do retângulo\n3-Área do quadrado\n4-Área do trapézio\n5-Área do círculo\n6-Sair\n"
    )
  );

  switch (opcao) {
    case 1:
      resultado = ret(
        prompt("Insira a base do triângulo: "),
        prompt("Insira a altura do triângulo: ")
      );
      alert("A área do triângulo é: " + resultado / 2);
      break;

    case 2:
      resultado = ret(
        prompt("Insira a base do retângulo: "),
        prompt("Insira a altura do retângulo: ")
      );
      alert("A área do retângulo é: " + resultado);
      break;

    case 3:
      resultado = quadrado(prompt("Insira o lado do quadrado: "));
      alert("A área do quadrado é: " + resultado);
      break;

    case 4:
      resultado =
        trapezio(
          parseFloat(prompt("Insira a base maior do trapézio: ")),
          parseFloat(prompt("Insira a base menor do trapézio: ")),
          prompt("Insira a altura do trapézio: ")
        ) / 2;
      alert("A área do trapézio é: " + resultado);
      break;

    case 5:
      resultado = circulo(prompt("Insira o raio do círculo: "));
      alert("A área do círculo é: " + resultado);
      break;

    case 6:
      opcao = 6;
      break;

    default:
      alert("Opção inválida. Tente novamente!");
  }
} while (opcao !== 6);
