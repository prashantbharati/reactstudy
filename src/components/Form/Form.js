import React, { useState } from "react";

const Form = (props) => {
  const [img, setImg] = useState("");
  const [heading, setHeading] = useState("");
  const [details, setDeatails] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();

    props.setProducts([
      ...props.products,
      {
        img: img,
        heading: heading,
        details: details,
      },
    ]);

    setDeatails("");
    setHeading("");
    setImg("");
  };

  const handledetailchange = (event) => {
    setDeatails(event.target.value);
  };

  const handleheadingchange = (event) => {
    setHeading(event.target.value);
  };

  const handleimagechange = (event) => {
    setImg(event.target.value);
  };

  return (
    <div
      style={{
        height: "50vh",
        border: "2px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handlesubmit}>
        <div>
          <label>Image link</label>
          <input
            placeholder="Image"
            type="text"
            onChange={handleimagechange}
            value={img}
          ></input>
        </div>

        <div>
          <label>Heading</label>
          <input
            placeholder="Heading"
            type="text"
            onChange={handleheadingchange}
            value={heading}
          ></input>
        </div>

        <div>
          <label>Deatils</label>
          <input
            placeholder="details"
            type="text"
            onChange={handledetailchange}
            value={details}
          ></input>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
