import { useState } from "react";
import "./style.css";
const Form = ({ addTodo }) => {
  const [myInput, setMyInput] = useState("");
  return (
    <header>
      <input
        placeholder="Adicione algo a lista"
        className="input"
        type="text"
        value={myInput}
        onChange={(e) => setMyInput(e.target.value)}
      ></input>
      <button className="btn" onClick={() => addTodo(myInput)}>
        Adicionar
      </button>
    </header>
  );
};
export default Form;
