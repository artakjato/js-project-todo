import { useToDoStore } from "../store/useToDoStore.jsx";
import React from "react";

export const ToDoList = () => {
  const { todos, completeTodo, deleteTodo } = useToDoStore((state) => ({
    ...state,
  }));

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "unset",
            }}
          >
            {todo.text}{" "}
          </span>
          {!todo.isCompleted ? (
            <button onClick={() => completeTodo(todo.id)}>Done</button>
          ) : null}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
      ,
    </ul>
  );
};
