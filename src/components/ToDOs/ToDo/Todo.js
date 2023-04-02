import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const Todo = ({ todotext, completed }) => {
  return (
    <li className="todo">
      <input type="checkbox" defaultChecked={completed} />
      <span className="todo-text">{todotext}</span>
      <span className="todo-icon">
        <FaTrashAlt />
      </span>
    </li>
  );
};

export default Todo;
