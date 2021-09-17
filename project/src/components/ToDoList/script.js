import "./style.css";
const ToDoList = ({ list, handleTodo }) => {
  return (
    <>
      <ul className="List">
        {list.map((item, index) => (
          <div class="listItem" key={index}>
            <li>{item}</li>
            <button onClick={() => handleTodo(item)}>Remover</button>
          </div>
        ))}
      </ul>
    </>
  );
};
export default ToDoList;
