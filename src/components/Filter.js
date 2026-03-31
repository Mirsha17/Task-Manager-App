import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../styles/Filter.css";

function Filter() {
  const { dispatch, filter, search } = useContext(TaskContext);

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) =>
          dispatch({ type: "SEARCH", payload: e.target.value })
        }
      />

      <div className="btn-group">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => dispatch({ type: "FILTER", payload: "all" })}
        >
          All
        </button>

        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => dispatch({ type: "FILTER", payload: "completed" })}
        >
          Completed
        </button>

        <button
          className={filter === "pending" ? "active" : ""}
          onClick={() => dispatch({ type: "FILTER", payload: "pending" })}
        >
          Pending
        </button>
      </div>
    </div>
  );
}

export default Filter;