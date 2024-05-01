"use client";

import { useTodos } from "@/store/Todos";

const Todos = () => {
  const { todos } = useTodos();
  const filterTodos = todos;
  return (
    <ul>
      {filterTodos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
};

export default Todos;
