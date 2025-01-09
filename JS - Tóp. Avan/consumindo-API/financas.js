let divCount = 0;

function renderizaCausa(causaDado) {
  const transacao = document.createElement("div");
  transacao.classList.add("transacao");
  transacao.id = `transacao-${causaDado.id}`;
  transacao.classList.add(divCount % 2 === 0 ? "gray" : "white");
  divCount++;

  //DAR APPEND NA DIV
  const infoName = document.createElement("span");
  infoName.id = `infoName-${causaDado.id}`;
  infoName.innerText = causaDado.name;
  infoName.classList.add("names");

  const infoValue = document.createElement("span");
  infoValue.id = `infoValue-${causaDado.id}`;
  infoValue.innerText = `R$ ${causaDado.value}`;
  infoValue.classList.add("values");

  const editButton = document.createElement("button");
  editButton.id = `edit-${causaDado.id}`;
  editButton.innerText = "Editar";
  editButton.classList.add("botao-editar");
  editButton.onclick = async function () {
    const edit = {
      name: prompt("Insira a causa:", causaDado.name),
      value: parseFloat(prompt("Insira o valor:", causaDado.value)),
    };

    const financaEditada = await fetch(
      `http://localhost:3000/gastos/${causaDado.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(edit),
      }
    );
    const ready = await financaEditada.json();

    const historico = document.querySelector("#transacoes");
    historico.reset();
    fetchGastos();
  };

  const deleteButton = document.createElement("button");
  deleteButton.id = `delete-${causaDado.id}`;
  deleteButton.innerText = "Deletar";
  deleteButton.classList.add("botao-deletar");
  deleteButton.onclick = async () => {
    const financaExcluida = await fetch(
      `http://localhost:3000/gastos/${causaDado.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    divCount--;
    historico.reset();
    fetchGastos();
  };

  transacao.append(infoName, infoValue, editButton, deleteButton);
  document.querySelector("#transacoes").appendChild(transacao);
}

let saldo = document.querySelector("#saldo");
saldo.textContent = `R$ ${0}`;

async function fetchGastos() {
  const gastos = await fetch("http://localhost:3000/gastos").then((r) =>
    r.json()
  );
  gastos.forEach(renderizaCausa);
}

async function atualizaSaldo() {
  const gastos = await fetch("http://localhost:3000/gastos").then((r) =>
    r.json()
  );
  let valorTotal = 0;
  gastos.forEach((e) => {
    valorTotal += parseFloat(e.value);
  });
  saldo.textContent = `R$ ${valorTotal}`;
}

document.addEventListener("DOMContentLoaded", () => {
  fetchGastos();
  atualizaSaldo();
});

const form = document.querySelector("form");

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const causaDado = {
    name: document.querySelector("#causa").value,
    value: parseFloat(document.querySelector("#value").value),
  };

  const botaoPerca = document.querySelector("#perca");

  if (botaoPerca.checked) {
    causaDado.value = causaDado.value * -1;
  }

  const response = await fetch("http://localhost:3000/gastos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(causaDado),
  });

  const savedDate = await response.json();

  form.reset();
  atualizaSaldo();
  renderizaCausa(savedDate);

  console.log(savedDate);
});
