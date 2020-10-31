import { without } from "./delArrItem";
import { getTask } from "./getTask";

export function deleteItem(todos) {
  let tasks = getTask();
  tasks = without(tasks, todos);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
