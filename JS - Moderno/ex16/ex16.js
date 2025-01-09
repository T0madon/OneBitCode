const dayjs = require("dayjs");

function aniversario(date) {
  const birthday = dayjs(date);
  const dataAtual = dayjs();

  //Mostrar idade da pessoa no dia atual
  const idade = dataAtual.diff(birthday, "year");
  console.log(`\nA sua idade é de: ${idade} anos`);

  //Sua próxima data de aniversário no formato “DD/MM/AAAA”
  const proximaData = birthday.add(idade + 1, "year");
  console.log(
    `Sua próxima data de aniversário é: ${proximaData.format("DD/MM/YYYY")}`
  );

  //Quantos dias faltam para o próximo aniversário
  const diasProx = proximaData.diff(dataAtual, "day");
  console.log(`Faltam ${diasProx + 1} dias para seu próximo aniversário\n`);
}

aniversario("2004-01-04");

//Americano = AAAA/MM/DD

// const a = dayjs("2024-01-04").format("DD/MM/YYYY");
// const b = dayjs(a.add(1, "day"));

// console.log(a);

// console.log(b);

// console.log(b.diff(a, "day"));
