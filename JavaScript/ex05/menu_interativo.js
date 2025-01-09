let opcao;

do {
  opcao = parseFloat(
    prompt(
      "Escolha uma das opções abaixo:\n1 - Opção um\n2 - Opção dois\n3 - Opção três\n4 - Opção quatro\n5 - Encerrar"
    )
  );

  switch (opcao) {
    case 1:
      alert("Você escolheu a opção 1");
      break;

    case 2:
      alert("Você escolheu a opção 2");
      break;

    case 3:
      alert("Você escolheu a opção 3");
      break;

    case 4:
      alert("Você escolheu a opção 4");
      break;

    case 5:
      alert("O sistema está sendo encerrado");
      break;

    default:
      alert("Valor inválido, tente novamente!");
  }
} while (opcao != 5);
