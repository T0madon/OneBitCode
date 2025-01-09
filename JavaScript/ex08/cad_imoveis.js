let imoCad = 0;
let imoSal = [];
let opcao = "0";

do {
  opcao = prompt(
    "*****MENU*****\n\nQuantidade de imóveis cadastrados: " +
      imoCad +
      "\n\n1 - Salvar um novo imóvel\n2 - Mostrar todos os imóveis salvos\n3 - Sair"
  );

  switch (opcao) {
    case "1":
      let imovel = {};

      imovel.nome = prompt("Insira o nome do proprietário: ");
      imovel.qddQuartos = parseFloat(prompt("Insira o número de quartos: "));
      imovel.qddBanhe = parseFloat(prompt("Insira a quantidade de banheiros"));
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não) ");

      imoSal.push(imovel);

      imoCad++;
      break;

    case "2":
      for (let i = 0; i < imoCad; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nNome do proprietário: " +
            imoSal[i].nome +
            "\nQuantidade de quartos: " +
            imoSal[i].qddQuartos +
            "\nQuantidade de banheiros: " +
            imoSal[i].qddBanhe +
            "\nImóvel possui garagem ? " +
            imoSal[i].garagem
        );
      }

      break;

    case "3":
      alert("O programa está sendo encerrado!");
      break;

    default:
      alert("Opção inválida. Tente novamente!");
  }
} while (opcao !== "3");
