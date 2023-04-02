import React, { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const setInputval = (inputval) => {
    setValue(inputval);
  };

  const resetInputval = () => {
    setValue("");
  };

  return [value, setInputval, resetInputval];
};

export default useInput;
