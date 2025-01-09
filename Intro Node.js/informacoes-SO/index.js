const os = require("node:os");

// const plataforma = os.platform();
// console.log("Plataforma do usuário: ", plataforma);

// const arquitetura = os.arch();
// console.log("Arquitetura do usuário: ", arquitetura);

const processadores = os.cpus();
console.log("Informações da CPU: ", processadores[0].model);

// const memoria = os.freemem();
// console.log(
//   "Total de memória do PC: ",
//   memoria / 1024 / 1024 / 1024,
//   " GB de RAM"
// );
