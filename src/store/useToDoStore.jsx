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
        },
      ],
    })),
}));
