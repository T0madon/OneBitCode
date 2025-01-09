const fs = require("node:fs");

fs.writeFile("test.txt", "Olá Node.JS", (err) => {
  console.log(err);
});
