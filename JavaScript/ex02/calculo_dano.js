const personagem1 = prompt("Nome do primeiro personagem: ");
const poderAtaque1 = parseFloat(
  prompt("Insira o poder de ataque do " + personagem1)
);

const personagem2 = prompt("Nome do segundo personagem: ");
let pontosVida2 = parseFloat(prompt("Pontos de vida do " + personagem2));
const poderDefesa2 = parseFloat(prompt("Poder de defesa do " + personagem2));
const escudo2 = prompt(personagem2 + " tem escudo (Sim/Não) ?");

let danoCausado = 0;

if (poderAtaque1 > poderDefesa2 && escudo2 === "Não") {
  danoCausado = poderAtaque1 - poderDefesa2;
} else if (poderAtaque1 > poderDefesa2 && escudo2 === "Sim") {
  danoCausado = (poderAtaque1 - poderDefesa2) / 2;
} else if (poderAtaque1 <= poderDefesa2) {
  danoCausado = 0;
}

let vidaFinal = pontosVida2 - danoCausado;

alert("Quantidade de dano: " + danoCausado + "\nPontos de vida: " + vidaFinal);
