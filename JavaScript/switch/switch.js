const opcoes = prompt(
  "Escolha uma das opções:\na)Minha vó dizia\nb)São conexões\nc)Vai matar ou"
);

switch (opcoes) {
  case "a":
    alert("mano");
    break;

  case "b":
    alert("de máfia");
    break;

  case "c":
    alert("morrer");
    break;

  default:
    alert("Não tem essa opção burro");
}
