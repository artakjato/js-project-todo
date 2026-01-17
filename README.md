# To-do List (React + Zustand)

A simple and clean to-do application built with React and Zustand. 
The app allows users to manage tasks efficiently with a strong focus on usability, accessibility, and responsive design. 
It supports adding tasks, marking them as complete or incomplete, removing tasks, and displaying helpful task counters.

The application uses Zustand for global state management, avoiding prop drilling and keeping the component structure simple and maintainable. 
All tasks are displayed, including both completed and uncompleted ones. Users can easily toggle the completion state of a task, add new tasks, 
and delete existing ones. The app also shows task counts, including the total number of tasks and the number of uncompleted tasks, and provides 
a thoughtful empty-state experience with an image when no tasks exist.

The layout is fully responsive and works well on small screens starting from 320px all the way up to large desktop screens. Accessibility best 
practices are followed throughout the app, including proper labels for form inputs, accessible names for checkboxes using aria-label, visible keyboard 
focus states using :focus-visible, sufficient color contrast, and alt text for images.

Project structure: 
src/App.jsx contains the main application layout and structure, 
src/components/Add.jsx handles the add-task form, 
src/components/List.jsx is responsible for rendering the task list, counters, and empty state, 
src/store/useToDoStore.jsx manages global state using Zustand, 
and src/index.css contains global styling and responsive layout rules.

