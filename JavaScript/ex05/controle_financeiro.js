let qddInicial = 0;
let opcao;

qddInicial = parseFloat(
  prompt("Insira a quantidade inicial de dinheiro disponível: ")
);

do {
  opcao = parseFloat(
    prompt(
      "Quantidade de dinheiro: " +
        qddInicial +
        "\nOPÇÕES:\n1 - Adicionar\n2 - Remover\n3 - Sair"
    )
  );

  switch (opcao) {
    case 1:
      let add = parseFloat(prompt("Quantos reais você gostaria de adicionar?"));
      qddInicial += add;
      break;

    case 2:
      let sub = parseFloat(prompt("Quantos reais você gostaria de remover?"));
      qddInicial -= sub;
      break;

    case 3:
      alert("O programa está sendo encerrado!");
      break;

    default:
      alert("Valor inválido, tente novamente!");
  }
} while (opcao != 3);
