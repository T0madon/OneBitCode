async function imc(peso, altura) {
  if (typeof peso !== "number" || typeof altura !== "number") {
    return Promise.reject("Valores inseridos não são números");
  }
  return peso / (altura * altura);
}

async function showImc(peso, altura) {
  try {
    console.log(`Calculando o IMC para peso ${peso} e altura ${altura}...`);
    const result = await imc(peso, altura);

    console.log(`O resultado do IMC foi de ${result}.`);

    if (result < 18.5) console.log("Situação: MAGREZA");
    else if (result < 25) console.log("Situação: NORMAL");
    else if (result < 30) console.log("Situação: SOBREPESO");
    else if (result < 40) console.log("Situação: OBESIDADE");
    else console.log("Situação: OBESIDADE GRAVE");
  } catch (err) {
    console.log(err);
  }
}

function mostrarNada(nome) {
  const a = nome;
  const b = 2;
}

showImc(71, 1.74);
showImc(48, 1.6);
showImc(71, "texto");
showImc(82, 1.72);
showImc(120, 1.8);
