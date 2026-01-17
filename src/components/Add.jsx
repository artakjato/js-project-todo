import { useToDoStore } from "../store/useToDoStore.jsx";
import React from "react";

export const Add = () => {
  const [todoValue, setTodoValue] = React.useState("");
  const addTodo = useToDoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = todoValue.trim();
    if (todoText.length === 0) return;
    addTodo(todoText);
    setTodoValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo" className="sr-only">
          Add a new task
        </label>

        <input
          type="text"
          id="new-todo"
          name="newTodo"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button>Add task</button>
      </form>
    </>
  );
};
