import PropTypes from "prop-types";
import { useState } from "react";
import TextInput from "./TextInput";

//LEMBRAR DE TENTAR USAR A FUNÇÃO ADDGAME AQUI

NewGameForm.propTypes = {
  addGame: PropTypes.func,
};

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="title"
        label="Título"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <TextInput
        id="title"
        label="Capa"
        value={cover}
        onChange={(ev) => setCover(ev.target.value)}
      />
      <button>Adicionar</button>
    </form>
  );
}
