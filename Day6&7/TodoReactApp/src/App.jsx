import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [Todos, setTotos] = useState([]);

  const AddTodo = () => {
    if (!input.trim()) return;

    setTotos([...Todos, input]);
    setInput("");
  };
  const DeleteTodo = (index) => {
    setTotos(Todos.filter((_, i) => i !== index));
  };
  const editTodo = (index) => {
    let updated = prompt("Edit Todo", Todos[index]);
    if (updated !== null && updated.trim() !== "") {
      const newTodo = [...Todos];
      newTodo[index] = updated;
      setTotos(newTodo);
    }
  };
  return (
    <div>
      <h2>Todo App</h2>
      <input
        type="text"
        placeholder="Add Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={AddTodo}>Add</button>
      <ul>
        {Todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => DeleteTodo(index)}>❌</button>
            <button onClick={() => editTodo(index)}>✏️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
