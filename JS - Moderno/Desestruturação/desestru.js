//Para OBJETOS

const person = {
  name: "Luke",
  job: "Farmer",
  parents: ["Anakin", "Padem"],
};

const name = person.name;
//O de cima faz para o name o mesmo que o de baixo faz para o job
const { job, parents } = person;

console.log(name, job, parents);

//Para ARRAYS

const [father, mother] = parents;

console.log(father, mother);

//Utilizando em uma função

// function createUser(person) {
//   const id = Math.floor(Math.random() * 9999);
//   return {
//     id,
//     name: person.name,
//     job: person.job,
//     parents: person.parents,
//   };
// }

//ESSAS DUAS FUNÇÕES FAZEM A MESMA COISA

function createUser({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999);
  return {
    id,
    name,
    job,
    parents,
  };
}

const luke = createUser(person);

console.log(luke);
