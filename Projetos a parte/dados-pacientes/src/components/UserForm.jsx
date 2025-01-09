import { useRef, useState } from "react";
import useDatas from "../hooks/useDatas";
import UserDatas from "../entities/User";

export default function UserForm({ userToUpdate }) {
  const defaultUser = {
    start: "",
    end: "",
    name: "",
    age: 0,
    cellphone: "",
    keyWord: "",
    description: "",
  };

  const [user, setUser] = useState(userToUpdate ? userToUpdate : defaultUser);
  const { addUser, updateUsers } = useDatas();
  const inputRef = useRef(null);

  const [schadules, setSchadules] = useState([
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
  ]);

  const handleChange = (ev) => {
    setUser((current) => ({
      ...current,
      [ev.target.name]: ev.target.value,
    }));
    console.log(user);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    try {
      if (userToUpdate) {
        updateUsers(userToUpdate.id, user);
        alert("Paciente atualizado com sucesso");
      } else {
        const validUser = new UserDatas(user);
        addUser(validUser);
        setUser(defaultUser);
        alert("Paciente cadastrado com sucesso!");
      }
    } catch (err) {
      console.log(err.message);
      alert("Ocorreu um erro.");
    } finally {
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            ref={inputRef}
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Idade</label>
          <input
            type="number"
            name="age"
            id="age"
            required
            min={0}
            step={1}
            value={user.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cellphone">Celular</label>
          <input
            type="text"
            name="cellphone"
            id="cellphone"
            required
            value={user.cellphone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="keyWord">Palavra-chave</label>
          <input
            type="text"
            name="keyWord"
            id="keyWord"
            required
            value={user.keyWord}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="start">Horário - Início</label>
          <select
            name="start"
            id="start"
            required
            value={user.start}
            onChange={handleChange}
          >
            <option disabled value="">
              Horário inicial
            </option>
            {schadules.map((schadule) => (
              <option
                key={schadule}
                value={schadule}
                defaultChecked={user.start === schadule}
              >
                {schadule}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="end">Horário - Fim</label>
          <select
            name="end"
            id="end"
            required
            value={user.end}
            onChange={handleChange}
          >
            <option disabled value="">
              Horário Final
            </option>
            {schadules.map((schadule) => (
              <option
                key={schadule}
                value={schadule}
                defaultChecked={user.end === schadule}
              >
                {schadule}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
}
