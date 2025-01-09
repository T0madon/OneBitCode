let vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal +=
      indice +
      ". " +
      vaga.nome +
      " (" +
      vaga.candidatos.length +
      " candidatos)\n";

    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function novaVaga() {
  nome = prompt("Insira um nome para a vaga: ");
  descricao = prompt("Escreva uma descrição para a vaga: ");
  dataLimite = prompt("Insira uma data limite para a vaga: ");

  const confirmacao = confirm(
    "Confirmar informações para a nova vaga: \nNome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData Limite: " +
      dataLimite
  );

  if (confirmacao) {
    const novaVaga = {
      nome,
      descricao,
      dataLimite,
      candidatos: [],
    };
    vagas.push(novaVaga);
    alert("Vaga Criada.");
  } else {
    alert("A vaga de " + nome + " não foi cadastrada!");
  }
}

function exibirVaga() {
  const indice = prompt("Insira o índice da vaga: ");
  const vaga = vagas[indice];

  if (vaga == undefined) {
    alert("Indice não existente!");
    return;
  }

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n - " + candidato;
  },
  "");

  alert(
    "Vaga n°: " +
      indice +
      "\nVaga: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos:\n" +
      candidatosEmTexto
  );
}

function inscrever() {
  const nomeCandidato = prompt("Insira o nome do candidato: ");
  const indice = prompt("Insira o índice da vaga desejada: ");

  const vaga = vagas[indice];

  if (vaga == undefined) {
    alert("Índice não encontrado!");
    return;
  }

  const confirmacao = confirm(
    "Confirmar a inscrição para a seguinte vaga:\nÍndice: " +
      indice +
      "\nVaga: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length
  );

  if (confirmacao) {
    vagas[indice].candidatos.push(nomeCandidato);
    alert("Candidato inscrito com sucesso!");
  } else {
    alert("Operação cancelada");
  }
}

function excluir() {
  const indice = prompt("Insira o índice da vaga a ser excluída:");
  const vaga = vagas[indice];

  if (vaga == undefined) {
    alert("Índice não encontrado!");
    return;
  }
  const confirmacao = confirm(
    "Confirmar a exclusão da seguinte vaga:\nÍndice: " +
      indice +
      "\nVaga: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída com sucesso!");
  } else {
    alert("Operação de exclusão cancelada!");
  }
}

do {
  opcao = prompt(
    "*****MENU*****\n\n1 - Listar Vagas Disponíveis\n2 - Criar uma nova vaga\n3 - Visualizar uma vaga\n4 - Inscrever um candidato em uma vaga\n5 - Excluir uma vaga\n6 - Sair\n"
  );

  switch (opcao) {
    case "1":
      if (vagas.length === 0) {
        alert("Nenhuma vaga cadastrada!");
      } else {
        listarVagas();
      }
      break;

    case "2":
      novaVaga();
      break;

    case "3":
      exibirVaga();
      break;

    case "4":
      inscrever();
      break;

    case "5":
      excluir();
      break;

    case "6":
      alert("O programa está sendo encerrado!");
      break;

    default:
      alert("Opção inválida. Tente novamente!");
  }
} while (opcao !== "6");
