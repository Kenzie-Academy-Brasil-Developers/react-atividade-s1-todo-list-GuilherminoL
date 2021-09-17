import "./App.css";
import Form from "./components/Form/script";
import ToDoList from "./components/ToDoList/script";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const addTodo = (newTodo) => {
    setList([...list, newTodo]);
  };
  const handleTodo = (Todo) => {
    const output = list.filter((item) => item !== Todo);
    setList(output);
  };
  return (
    <>
      <Form addTodo={addTodo} />
      <ToDoList list={list} handleTodo={handleTodo} />
    </>
  );
}

export default App;
