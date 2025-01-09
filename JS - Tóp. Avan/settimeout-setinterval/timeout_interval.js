console.log("E começççççççou Gau!");

//Set TimeOut:

//passa uma função anônima, que faz alguma coisa e o segundo parâmetro
//fala em qnt tempo vai fazer aql, a unidade de tempo é ms

// const timeOutId = setTimeout(() => {
//   console.log("3 segundos se passaram");
// }, 1000 * 3);

// clearTimeout(timeOutId);

let seconds = 0;

const intervalId = setInterval(() => {
  seconds += 3;
  console.log(`Se passaram ${seconds} segundos.`);
  if (seconds >= 12) {
    clearInterval(intervalId);
    console.log("Já passaram mais de 12 segundos, programa encerrado");
  }
}, 1000 * 3);
