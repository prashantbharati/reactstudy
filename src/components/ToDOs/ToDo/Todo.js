import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./Todo.css";
const Todo = ({ id, todotext, completed, deletetodo, markthorugh }) => {
  const handlemark = (id) => {
    markthorugh(id);
    console.log(id, todotext, completed);
  };

  return (
    <li className="todo">
      <input
        type="checkbox"
        defaultChecked={completed}
        onClick={() => handlemark(id)}
      />
      <span
        className="todotext"
        style={{ textDecoration: completed === true ? "line-through" : "none" }}
      >
        {todotext}
      </span>
      <span className="todo-icon" onClick={() => deletetodo(id)}>
        <FaTrashAlt />
      </span>
    </li>
  );
};

export default Todo;
