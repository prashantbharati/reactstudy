import React, { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState(0);

  const handleclick1 = () => {
    setValue(value + 1);
  };

  const handleclick2 = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <h1>Calculator</h1>

      <h2>{value}</h2>

      <button onClick={handleclick1}>+</button>
      <button onClick={handleclick2}>-</button>
    </div>
  );
};

export default Calculator;
