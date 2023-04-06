import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import TodoList from "../ToDoList/TodoList";
const TodoApp = () => {
  const intialtodo = JSON.parse(localStorage.getItem("todo") || "[]");

  const default_todos = [
    {
      id: "157",
      task: "Go to gym",
      completed: false,
    },
    {
      id: "168",
      task: "Study react",
      completed: false,
    },
    {
      id: "200",
      task: "Play sports",
      completed: false,
    },
  ];

  const [todo, setTodo] = useState(intialtodo);

  const deletetodo = (id) => {
    setTodo((prevstate) => {
      return prevstate.filter((todo) => todo.id !== id);
    });
  };

  const markthorugh = (id) => {
    setTodo((prevstate) => {
      return prevstate.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>TODO APP</h1>
      <Form todos={todo} settodo={setTodo} />
      <TodoList
        todos={todo}
        deletetodo={deletetodo}
        markthorugh={markthorugh}
      />
    </div>
  );
};

export default TodoApp;
