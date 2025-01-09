async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Arguments must be of type number");
  }
  return a + b;
}

// async function execute() {
//   asyncSum(50, 33).then((result) => {
//     console.log(result);
//   });
// }

async function execute() {
  try {
    const result = await asyncSum(50, null);
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  //await espera a promise ser resolvida, então atribui o
  //resultado para a variável
  //await só funciona em funções assíncronas
}

execute();
