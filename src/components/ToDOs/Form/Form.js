import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
const Form = ({ todos, settodo }) => {
  const [task, setTask] = useState("");
  // useref intro
  const emailinputref = useRef("");
  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(task);
    // useref value access
    console.log(emailinputref.current.value);
    /******** */
    settodo((prevstate) => {
      return [
        ...prevstate,
        {
          id: uuid(),
          task: task,
          complete: false,
        },
      ];
    });

    setTask("");
    // Useref value use
    emailinputref.current.value = "";
    console.log(task);
  };

  const handletextchange = (event) => {
    // console.log(event);
    setTask(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <form className="form" onSubmit={handlesubmit}>
        <div className="form-control">
          <label> Add todo</label>
          <br />
          <input
            type="text"
            placeholder="Add new todos"
            onChange={handletextchange}
            value={task}
          />
          {/*Reference passes*/}
          <input type="text" placeholder="email" ref={emailinputref} />
        </div>
        <button className="form-btn" type="submit">
          Add Todos
        </button>
      </form>
    </div>
  );
};

export default Form;
