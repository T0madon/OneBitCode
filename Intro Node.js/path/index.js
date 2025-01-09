const path = require("node:path");

const dir = "src";
const file = "app.js";

//path.join = mistura os dois caminhos
const fullPath = path.join(dir, file);
console.log(fullPath);

//path.resolve = mostra todo o diretório
const relativePath = "../arquivos/relatorio.pdf";
const absolutePath = path.resolve(relativePath);

console.log(absolutePath);

//path.basename = mostra o ultimo caminho
const fileName = path.basename(relativePath);
console.log(fileName);

//path.extname = mostra o tipo do arquivo
const ext = path.extname(absolutePath);
console.log(ext);
