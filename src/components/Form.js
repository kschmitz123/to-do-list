import { useState } from "react";
import "./form.css";
import { saveTask } from "../utils/saveTask";
import { getTask } from "../utils/getTask";
import ToDoList from "./ToDoList";

export default function Input({ prop }) {
  const [task, setTask] = useState(null);
  const [todos, setTodos] = useState(getTask());

  const submit = (event) => {
    event.preventDefault();
    saveTask(task);
    setTodos([...todos, task]);
    setTask("");
  };

  const tasks = getTask();

  return (
    <div className="container">
      <form className="form" onSubmit={submit}>
        <input
          onChange={(event) => {
            setTask(event.target.value);
          }}
          className="form__input"
          value={task}
          type="text"
          placeholder="Add ToDo"
        />
        <button>✏️</button>
      </form>
      <ToDoList todos={tasks} />
    </div>
  );
}
