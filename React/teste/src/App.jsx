import { useState } from "react";

export default function App() {
  const defaultUser = {
    start: "",
    end: "",
    name: "",
    age: 0,
    cellphone: "",
    keyWord: "",
    description: "",
  };

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

  return (
    <>
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
    </>
  );
}
