let opcao = "";
let pilha = [];

do {
  let cartas = "";

  for (let i = 0; i < pilha.length; i++) {
    cartas += pilha[i] + "\n";
  }

  opcao = prompt(
    "***MENU***\nCartas no baralho:\n\n" +
      cartas +
      "\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3 - Sair"
  );

  switch (opcao) {
    case "1":
      let cartaNova = prompt("Insira o nome da carta nova: ");
      pilha.push(cartaNova);
      break;

    case "2":
      let cartaPuxada = pilha.pop();
      alert("A carta puxada foi " + cartaPuxada);
      break;

    case "3":
      alert("O programa está sendo encerrado!");
      break;

    default:
      alert("Valor inválido. Tente novamente!");
  }
} while (opcao !== "3");
