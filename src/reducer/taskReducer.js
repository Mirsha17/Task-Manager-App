const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(t => t.id !== action.payload)
      };

    case "TOGGLE":
      return {
        ...state,
        tasks: state.tasks.map(t =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        )
      };

    case "FILTER":
      return { ...state, filter: action.payload };

    case "SEARCH":
      return { ...state, search: action.payload };

    default:
      return state;
  }
};

export default taskReducer;