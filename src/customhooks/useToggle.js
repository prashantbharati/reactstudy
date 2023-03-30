import React, { useState } from "react";

const useToggle = (intialval) => {
  const [toggle, setToggle] = useState(intialval);

  const changeToggle = () => {
    setToggle(!toggle);
  };

  return [toggle, changeToggle];
};

export default useToggle;
