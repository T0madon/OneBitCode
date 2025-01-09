import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

const title = new Component("h1", "body", { textContent: "Olá mundo!" });
console.log(title);

title.render();

const form = new Form("body");
const label = new Label("Nome: ", form, { htmlFor: "nameInput" });
const input = new Input(Form, {
  id: "nameInput",
  name: "name",
  placeholder: "Digite seu nome",
});

form.render();
label.render();

form.addChildren(input);
