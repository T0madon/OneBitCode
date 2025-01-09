let x = 0;
let valor = parseFloat(
  prompt("Insira um valor em metros(m) a ser convertido: ")
);

while (x == 0) {
  let resultado;
  let opcoes = prompt(
    "Escolha uma das opções para ser convertido:\na)milímetro(mm)\nb)centímetro(cm)\nc)decímetro(dm)\nd)decâmetro(dam)\ne)hectômetro(hm)\nf)quilômetro(km)\ng)Sair"
  );

  switch (opcoes) {
    case "a":
      resultado = valor * 1000;
      alert(valor + " metros são " + resultado + " milímetros!");
      break;

    case "b":
      resultado = valor * 100;
      alert(valor + " metros são " + resultado + " centímetros!");
      break;

    case "c":
      resultado = valor * 10;
      alert(valor + " metros são " + resultado + " decímetros!");
      break;

    case "d":
      resultado = valor * 0.1;
      alert(valor + " metros são " + resultado + " decâmetros!");
      break;

    case "e":
      resultado = valor * 0.01;
      alert(valor + " metros são " + resultado + " hectômetros!");
      break;

    case "f":
      resultado = valor * 0.001;
      alert(valor + " metros são " + resultado + " quilômetros!");
      break;

    case "g":
      x = 1;
      break;

    default:
      alert("Valor inserido não aceito. Tente novamente!");
  }
}
