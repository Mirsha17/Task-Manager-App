import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../styles/TaskForm.css";

function TaskForm() {
  const [task, setTask] = useState("");
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;

    dispatch({
      type: "ADD_TASK",
      payload: { id: Date.now(), title: task, completed: false }
    });

    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add Task</button>
    </form>
  );
}

export default TaskForm;