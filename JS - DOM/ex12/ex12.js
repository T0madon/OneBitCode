let i = 0;

function geraLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.innerText = text;
  label.htmlFor = htmlFor;
  return label;
}
function geraInput(type, id, name, value) {
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.name = name;
  input.value = value;
  return input;
}

const buttonAdd = document.getElementById("add-event");
let developers = [];
const form = document.getElementById("formulario");

buttonAdd.addEventListener("click", function (ev) {
  ev.preventDefault();

  const pulaLinha = document.createElement("br");

  const ul = document.getElementById("tecnologias");

  const newLi = document.createElement("li");
  newLi.id = "li" + i;
  newLi.className = "inputRow";

  const labelName = geraLabel("Tecnologia: ", "nomeTecnologia" + i);
  const inputName = geraInput(
    "text",
    "nomeTecnologia" + i,
    "nomeTecnologia",
    ""
  );

  const labelExp = geraLabel("Experiência: ", "experiencia" + i);

  const inputExp1 = geraInput(
    "radio",
    "expRadio" + i + ".1",
    "experiencia" + i,
    "0-2 anos"
  );
  const labelExp1 = geraLabel("0 - 2 anos", "expRadio" + i + ".1");

  const inputExp2 = geraInput(
    "radio",
    "expRadio" + i + ".2",
    "experiencia" + i,
    "3-4 anos"
  );
  const labelExp2 = geraLabel("3 - 4 anos", "expRadio" + i + ".2");

  const inputExp3 = geraInput(
    "radio",
    "expRadio" + i + ".3",
    "experiencia" + i,
    "5+ anos"
  );
  const labelExp3 = geraLabel("5+ anos", "expRadio" + i + ".3");

  const btnRemove = document.createElement("button");
  btnRemove.type = "button";
  btnRemove.innerText = "Remover Tecnologia Acima";
  btnRemove.addEventListener("click", function () {
    ul.removeChild(newLi);
    i--;
  });

  newLi.append(
    labelName,
    inputName,
    pulaLinha,
    labelExp,
    inputExp1,
    labelExp1,
    inputExp2,
    labelExp2,
    inputExp3,
    labelExp3,
    pulaLinha,
    btnRemove
  );
  ul.appendChild(newLi);

  i++;
});

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const nome = document.getElementById("name");
  const inputRows = document.querySelectorAll(".inputRow");

  const technologies = [];

  inputRows.forEach(function (row) {
    const techName = document.querySelector(
      "#" + row.id + ' input[name="nomeTecnologia"]'
    ).value;

    const techExp = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value;

    technologies.push({ techName: techName, exp: techExp });
  });

  const newDev = { name: nome.value, technologies: technologies };
  developers.push(newDev);

  alert("O(a) dev " + nome.value + " foi cadastrado com sucesso!");

  nome.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });

  console.log(developers);
});
