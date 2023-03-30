import React, { useState } from "react";
import "./product.css";
const Product = (props) => {
  //   let click = "Not Clicked";
  const [click, setClick] = useState("Not clicked");

  const handleclick = () => {
    click === "clicked" ? setClick("Not Clicked") : setClick("Clicked");
    console.log("click");
  };

  return (
    <div onClick={handleclick}>
      <div className="parentdiv">
        <div className="maindiv">
          <img className="image" src={props.img} alt="mountainpic" />

          <h1>{props.heading}</h1>
          <h2>{props.details}</h2>
          {/* <h3>{click}</h3> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
