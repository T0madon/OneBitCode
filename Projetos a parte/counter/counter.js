let lista = document.getElementById("numero");
let num = 0;
let root = document.querySelector(":root");
function decrement() {
  num--;
  mudaNum();
  verificaSinal();
}
function reset() {
  num = 0;
  mudaNum();
  verificaSinal();
}
function increment() {
  num++;
  mudaNum();
  verificaSinal();
}
function mudaNum() {
  lista.innerHTML = `<div id='numero'>${num}</div>`;
}
function verificaSinal() {
  if (num < 0) {
    root.style.setProperty("--color-number", "#ff0043");
  } else if (num > 0) {
    root.style.setProperty("--color-number", "#4dff91");
  } else {
    root.style.setProperty("--color-number", "#000000");
  }
}
