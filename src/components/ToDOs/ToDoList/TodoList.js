import React from "react";
import Todo from "../ToDo/Todo";

const TodoList = ({ markthorugh, todos, deletetodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            id={todo.id}
            todotext={todo.task}
            deletetodo={deletetodo}
            completed={todo.completed}
            markthorugh={markthorugh}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
