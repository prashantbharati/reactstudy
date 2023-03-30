import React from "react";

const card = ({ name, age }) => {
  //   console.log(props, props.name, props.age);

  return (
    <div
      style={{
        height: "150px",
        width: "150px",
        backgroundColor: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    </div>
  );
};

export default card;
