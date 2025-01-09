function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age) {
      resolve(age > 18);
    } else {
      reject(new Error("age is required"));
    }
  });
}

function getAge(birthday) {
  return new Promise((resolve, reject) => {
    if (birthday) {
      const birthYear = new Date(birthday).getFullYear();
      const currentYear = new Date().getFullYear();
      resolve(currentYear - birthYear);
    } else {
      reject(new Error("birthday is required"));
    }
  });
}

getAge("2008-08-08")
  .then((age) => {
    return checkAge(age);
  })
  .then((mais18) => {
    if (mais18) {
      console.log("Maior de 18 anos");
    } else {
      console.log("Menor de 18 anos");
    }
  })
  .catch((err) => {
    console.log(err.message);
  });
