const nome = prompt("Digite seu nome: ");

let visitou = prompt("Você já visitou alguma cidade ?(sim/não)");
let nomesTotais = "";
let quantidade = 0;

if (visitou === "sim") {
  while (visitou === "sim") {
    let nomeCidade = prompt("Qual o nome da cidade que você visitou?");
    nomesTotais = nomesTotais + "\n" + nomeCidade;
    quantidade += 1;

    visitou = prompt("Você visitou mais alguma cidade ?(sim/não)");
  }

  alert(
    "Nome: " +
      nome +
      "\nQuantidade de cidades visitadas: " +
      quantidade +
      "\nNome das cidades visitadas: " +
      nomesTotais
  );
} else {
  alert("Po cara, foda viu!");
}
