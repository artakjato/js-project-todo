import { useToDoStore } from "../store/useToDoStore.jsx";
import React from "react";

export const Add = () => {
  const [todoValue, setTodoValue] = React.useState("");
  const { addTodo } = useToDoStore((state) => ({ state }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = e.target[0].value;
    addTodo(todoText);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
