function sum(a, b) {
  const firstNumber = Number(a);
  const secondNumber = Number(b);

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    throw new Error("arguments must be two numbers");
  }
  if (firstNumber + secondNumber === 18) {
    throw new Error("A soma deu 18");
  }
  if (firstNumber + secondNumber === 11) {
    throw new Error("A soma deu 11");
  }

  return firstNumber + secondNumber;
}

try {
  console.log(sum(2, 9));
  console.log(sum(true, 14));
  // console.log(sum(undefined, 22));
  console.log(sum(18, "0"));
  console.log(sum(39, null));
  console.log(sum(13, "zero"));
} catch (error) {
  console.log("An error ocurred!");
  console.log(error.message);
} finally {
  console.log("Calculations finished.");
}
