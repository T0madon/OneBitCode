function escala() {
  const posicao = document.getElementById("posicao").value;
  const nome = document.getElementById("nomeJog").value;
  const num = document.getElementById("numAdd").value;

  const confirmacao = confirm(
    "Confirme se deseja escalar o seguinte jogador: \n\nPosição: " +
      posicao +
      "\nNome: " +
      nome +
      "\nNúmero da camisa: " +
      num
  );

  if (confirmacao) {
    //infos -> lista_escalados(ul)
    const ul = document.getElementById("lista_escalados");
    const newPlayer = document.createElement("li");

    newPlayer.id = "player - " + num;
    newPlayer.innerText = num + " - " + nome + " - " + posicao;

    ul.appendChild(newPlayer);

    alert("Jogador escalado!");
    document.getElementById("posicao").value = "";
    document.getElementById("nomeJog").value = "";
    document.getElementById("numAdd").value = "";
    return;
  }
  document.getElementById("posicao").value = "";
  document.getElementById("nomeJog").value = "";
  document.getElementById("numAdd").value = "";
  alert("Operação cancelada!");
  return;
}

function remove() {
  const jogRemover = document.getElementById("numSub").value;
  const playerToRemove = document.getElementById("player - " + jogRemover);

  const confirmacao = confirm(
    "Você quer remover o jogador: " + playerToRemove.innerText + " ?"
  );
  if (confirmacao) {
    playerToRemove.remove();
    document.getElementById("numSub").value = "";
    alert("Jogador removido!");
    return;
  }
  alert("Operação Cancelada");
}
