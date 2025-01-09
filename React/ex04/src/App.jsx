import { useState } from "react";
import Input from "./components/input";

export default function App() {
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("Copiar");
  const [passSize, setPassSize] = useState(12);
  const [showInput, setShowInput] = useState(false);

  const customSize = showInput ? passSize : 8;

  function generate() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";
    for (let i = 0; i < customSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
    setCopy("Copiar");
  }

  function copyToClipBoard() {
    setCopy("Copiado!");
    navigator.clipboard.writeText(password);
  }

  return (
    <div className="app">
      <h1>Gerador de senhas</h1>
      <div id="custom">
        <label htmlFor="showInput">Customizar tamanho: </label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput((estadoAtual) => !estadoAtual)}
        />
      </div>
      {showInput ? (
        <div>
          <label htmlFor="passSize">Tamanho: </label>
          <Input passSize={passSize} setPassSize={setPassSize} />
        </div>
      ) : null}

      <button onClick={generate}>
        Gerar senha de {customSize} caracteres!
      </button>
      <button onClick={copyToClipBoard}>{copy}</button>
      <div>{password}</div>
    </div>
  );
}
