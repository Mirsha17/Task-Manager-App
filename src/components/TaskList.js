import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

function TaskList() {
  const { tasks, filter, search } = useContext(TaskContext);

  const filtered = tasks
  .filter(task =>
    filter === "all"
      ? true
      : filter === "completed"
      ? task.completed
      : !task.completed
  )
  .filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="task-container">
      {filtered.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;