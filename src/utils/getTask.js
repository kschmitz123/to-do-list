export function getTask(todo) {
  let task = null;

  try {
    task = JSON.parse(localStorage.getItem("tasks")) || [];
  } catch (error) {
    console.error(error);
    task = [];
  }
  return task;
}
