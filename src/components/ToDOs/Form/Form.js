import React from "react";

const Form = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "450px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form className="form">
        <div className="form-control">
          <label> Add todo</label>
          <br />
          <input type="text" placeholder="Add new todos" />
        </div>
        <button className="form-btn">Add Todos</button>
      </form>
    </div>
  );
};

export default Form;
