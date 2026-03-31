import { createContext, useReducer } from "react";
import taskReducer from "../reducer/taskReducer";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const initialState = {
    tasks: [],
    filter: "all",
    search: ""
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        filter: state.filter,
        search: state.search,
        dispatch
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};