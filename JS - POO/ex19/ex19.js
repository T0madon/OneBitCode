const Author = require("./Author");

const lovecraft = new Author("H.P. Lovecraft");

const post = lovecraft.criaPost("Chulucutchu");

post.addComment("Achei paia");

console.log(lovecraft);
console.log(post);
