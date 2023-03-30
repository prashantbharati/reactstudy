import React from "react";
import useToggle from "./usetoggle";
import Happyblock from "./Happyblock";
const Toggle = () => {
  const [toggle, setToggle] = useToggle(true);

  const handleclick = () => {
    setToggle();
  };

  return (
    <div>
      {toggle && <Happyblock />}
      <button onClick={handleclick}>Toggle</button>
    </div>
  );
};

export default Toggle;
