let cont = 0;
do {
  let palavra = prompt("Insira uma palavara a ser verificada: ");
  let vet = "";

  for (let i = palavra.length - 1; i >= 0; i--) {
    vet += palavra[i];
  }

  if (vet === palavra) {
    cont = parseFloat(
      prompt("A palavra é um palíndromo!\n1 - Sair\nEnter - Continuar")
    );
  } else {
    cont = parseFloat(
      prompt(
        "A palavra não é um palíndromo!\nNormal: " +
          palavra +
          "\nContrário: " +
          vet +
          "\n1 - Sair\nEnter - Continuar"
      )
    );
  }
} while (cont !== 1);
