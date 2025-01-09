const fs = require("node:fs");
const readline = require("node:readline");
const path = require("node:path");

const notesDirectory = path.join(__dirname, "notes");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function initializeNotesDirectory() {
  if (!fs.existsSync(notesDirectory)) {
    fs.mkdirSync(notesDirectory);
  }
}

function listNotes() {
  const notes = fs.readdirSync(notesDirectory);

  if (notes.length === 0) {
    console.log("Nenhuma nota encontrada");
  } else {
    console.log("Notas salvas: \n");
    notes.forEach((note, index) => {
      console.log(`${index + 1}. ${note}`);
    });
  }
}

function readNote() {
  listNotes();

  rl.question("Digite o número da nota que deseja ler(índice): ", (index) => {
    const notes = fs.readdirSync(notesDirectory);
    const selectedNote = notes[index - 1];

    if (!selectedNote) {
      console.log("Índice da nota inválido!");
    } else {
      const notePath = path.join(notesDirectory, selectedNote);
      const content = fs.readFileSync(notePath, "utf-8");
      console.log(`Conteúdo da nota ${selectedNote} :\n\n${content}`);
    }
    askForNextAction();
  });
}

function createNote() {
  rl.question("Digite o nome da nota: ", (noteName) => {
    const notePath = path.join(notesDirectory, noteName);

    rl.question("Digite o conteúdo da nota:\n", (content) => {
      fs.writeFileSync(notePath + ".txt", content, "utf-8");
      console.log(`Nota ${noteName} foi criada com sucesso`);
      askForNextAction();
    });
  });
}

function deleteNote() {
  listNotes();
  rl.question("Digite o índice da nota que deseja excluir: ", (index) => {
    const notes = fs.readdirSync(notesDirectory);
    const selectedNote = notes[index - 1];

    if (!selectedNote) {
      console.log("Índice da nota inválido!");
    } else {
      const notePath = path.join(notesDirectory, selectedNote);
      fs.unlinkSync(notePath);
      console.log(`Nota ${selectedNote} excluída com sucesso!`);
    }
    askForNextAction();
  });
}

function askForNextAction() {
  rl.question("\nDeseja continuar na aplicação? (s/n): ", (answer) => {
    if (answer.toLowerCase() === "s") {
      main();
    } else {
      console.log("Encerrando aplicação...");
      rl.close();
      process.exit(0);
    }
  });
}

function main() {
  initializeNotesDirectory();

  console.clear();

  console.log("----------------------------------------");
  console.log("Blocos de notas do terminal - by T0madon");
  console.log("----------------------------------------\n");

  console.log("Escolha uma opção:");
  console.log("1. Listar notas");
  console.log("2. Ler uma nota");
  console.log("3. Criar uma nota");
  console.log("4. Excluir uma nota");
  console.log("5. Sair");

  rl.question("Digite uma das opções acima: ", (option) => {
    switch (option) {
      case "1":
        listNotes();
        askForNextAction();
        break;
      case "2":
        readNote();
        break;
      case "3":
        createNote();
        break;
      case "4":
        deleteNote();
        break;
      case "5":
        console.log("Saindo...");
        rl.close();
        process.exit(0);
      default:
        console.log("Opção inválida! Tente novamente.");
        break;
    }
  });
}

main();
