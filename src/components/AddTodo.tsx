"use client";
import { useTodos } from "@/store/Todos";
import React, { FormEvent, useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const { handleAddTodo } = useTodos();

  const handleSubmmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };
  return (
    <div className="mt-4">
      <form onSubmit={handleSubmmit}>
        <input
          type="text"
          className="border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your todo"
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
