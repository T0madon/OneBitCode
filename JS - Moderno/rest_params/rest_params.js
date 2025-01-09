function soma(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0);
}

const vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const vetClone = [...vet];
vetClone.push(11);

console.log(vet);
console.log(vetClone);

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(soma(vetClone));
