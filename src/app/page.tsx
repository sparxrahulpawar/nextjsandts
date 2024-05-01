import React from "react";
import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todos";

const page = () => {
  return (
    <main>
      <h2>TODO Next + TypeScript</h2>
      <AddTodo />
      <Todos />
    </main>
  );
};

export default page;
