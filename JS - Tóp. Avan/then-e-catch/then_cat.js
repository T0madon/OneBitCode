function execute() {
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo executada...");
    setTimeout(() => {
      if (false) {
        reject("A promise foi rejeitada!");
      } else {
        console.log("Resolvendo a promise...");
        resolve(42);
      }
    }, 2000);
  });
}

execute()
  .then((result) => {
    console.log(`A promise foi executada. Seu resultado é ${result}`);
  })
  .catch((err) => {
    console.log(`A promise foi rejeitada. Motivo: ${err}`);
  })
  .finally(() => {
    console.log(`A promise foi finalizada!`);
  });
