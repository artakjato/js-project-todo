import { create } from "zustand";
import { uid } from "react-uid";

export const useToDoStore = create((set) => ({
  todos: [],
  addTodo: (todoText) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          text: todoText,
          id: uid(`${todoText}-${state.todos.length}`),
          completed: false,
          date: new Date(),
        },
      ],
    })),
  completeTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo   //toggle method to mark task as complete/incomplete
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
