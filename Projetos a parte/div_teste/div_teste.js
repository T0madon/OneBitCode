let i = 0;

document.getElementById("tarefa").addEventListener("keypress", function (ev) {
  if (ev.key === "Enter") {
    document.getElementById("tarefas").innerHTML =
      "<div><input type='checkbox' id='i'/>Tarefa a ser concluída<button>Close</button></div>";
  }
});
