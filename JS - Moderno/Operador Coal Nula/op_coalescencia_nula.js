const a = 0;

const b = null;

const c = "teste";

console.log(a || b || c); // Operador || devolve o primeiro valor true que aparece, nesse caso a var c

console.log(a ?? b ?? c); //Op ?? devolve o primeiro valor não nulo e não undefined,nesse caso a var a

console.log("\nSegunda parte a partir daqui:\n\n");

let d = 0;
let e = d || 42;

console.log({ d, e });

e = d ?? 42;

console.log({ d, e });
