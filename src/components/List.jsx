import { useToDoStore } from "../store/useToDoStore.jsx";

export const ToDoList = () => {
  const todos = useToDoStore((state) => state.todos);
  const completeTodo = useToDoStore((state) => state.completeTodo);
  const deleteTodo = useToDoStore((state) => state.deleteTodo);

  const uncompletedCount = todos.filter((todo) => !todo.completed).length;
  const totalCount = todos.length;

  return (
    <>
      <div>
        <p>
          Total: {totalCount} | Uncompleted: {uncompletedCount}
        </p>
        <img src="../public/notodo.jpg" hidden={totalCount > 0} alt="No To-Do's today"/>
      </div>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "unset",
              }}
            >
              {todo.text}{" "}
              {todo.date.toUTCString()}{" "}

            </span>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => completeTodo(todo.id)}
            />
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>

        ))}
        ,
      </ol>
    </>
  );
};
