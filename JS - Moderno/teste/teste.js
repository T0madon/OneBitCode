// const moda = (...valores) => {
//   for (let i = 0; i < valores.length; i++) {}
// };

// console.log(metade(1, 8, 5, 6, 3, 3, 1, 1));

const a = [2, 3, 4, 4, 1, 1, 3, 9, 3, 10, 20, 4]; //-> TAM = 12

let obj = [];

for (let i = 0; i < Math.max.apply(null, a); i++) {
  obj[i] = 0;
}

for (let i = 0; i < a.length; i++) {
  for (let j = 1; j < a.length; j++) {
    if (a[i] === a[j]) {
      obj[a[i]] += 1;
    } else {
      obj[a[i]] = 1;
    }
  }
}

console.log(obj);
