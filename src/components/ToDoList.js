import { useState } from "react";
// import { deleteItem } from "../utils/deleteItem";
import { getTask } from "../utils/getTask";

import "./toDoList.css";

export default function ToDoList({ todos }) {
  const [todo, setTodos] = useState(getTask());
  function handleRemove(todos) {
    const newTodos = todo.filter((task) => task !== todos);

    setTodos(newTodos);
    console.log(newTodos);
  }

  const taskElements = todos.map((task) => (
    <li key={task} tasks={task}>
      <input type="checkbox" />
      <span>{task}</span>
      <button className="delete__btn" onClick={() => handleRemove(task)}>
        💥
      </button>
    </li>
  ));
  return taskElements;
}
