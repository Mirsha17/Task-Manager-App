import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../styles/TaskItem.css";

function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);

  return (
    <div className="task-card">
      <h6 className={task.completed ? "completed" : ""}>{task.title}</h6>
      <div className="d-flex justify-content-between mt-2">
        <button
          className="btn btn-sm"
          onClick={() =>
            dispatch({ type: "TOGGLE_COMPLETE", payload: task.id })
          }
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          className="btn btn-sm"
          onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;