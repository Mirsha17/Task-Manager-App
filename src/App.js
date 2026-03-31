import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <TaskForm />
      <Filter />
      <TaskList />
    </div>
  );
}

export default App;