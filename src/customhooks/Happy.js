import React, { useState } from "react";
import Happyblock from "./Happyblock";
const Happy = () => {
  const handleclick = () => {
    setVisible(!visible);
  };

  const [visible, setVisible] = useState(true);

  return (
    <div>
      {visible && <Happyblock />}
      <button onClick={handleclick}>Toggle</button>
    </div>
  );
};

export default Happy;
