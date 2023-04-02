import React from "react";
import Form from "../Form/Form";
import TodoList from "../ToDoList/TodoList";
const TodoApp = () => {
  const default_todos = [
    {
      task: "go to gym",
      completed: false,
    },
    {
      task: "study react",
      completed: false,
    },
    {
      task: "play sports",
      completed: false,
    },
  ];

  return (
    <div>
      <Form />
      <TodoList />
    </div>
  );
};

export default TodoApp;
