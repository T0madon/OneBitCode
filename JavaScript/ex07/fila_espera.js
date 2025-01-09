let opcao = 0;
let fila = [];

do {
  let pacientes = "";

  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "° - " + fila[i] + "\n";
  }

  opcao = prompt(
    "****MENU****\nPacientes Esperando: \n" +
      pacientes +
      "\n1 - Novo Paciente\n2 - Consultar Paciente\n3 - Sair"
  );

  switch (opcao) {
    case "1":
      let nomeNovo = prompt("Insira o nome do novo paciente: ");
      fila.push(nomeNovo);
      break;

    case "2":
      if (fila.length === 0) {
        alert("Nenhum paciente na fila de espera!");
      } else {
        let pacienteConsultado = fila.shift();
        alert("O paciente " + pacienteConsultado + " foi consultado!");
      }
      break;

    case "3":
      alert("O programa está sendo encerrado!");
      break;

    default:
      alert("Opção inválida, tente novamente!");
  }
} while (opcao !== "3");
