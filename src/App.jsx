import { Add } from "./components/Add.jsx";
import { ToDoList } from "./components/List.jsx";

export const App = () => {
  return (
    <>
      <h1>My To-do List</h1>
      <Add />
      <ToDoList />
    </>
  );
};
