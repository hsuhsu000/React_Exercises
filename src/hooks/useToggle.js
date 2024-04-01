import React from "react";
import { useState } from "react";

const useToggle = (intialValue = false) => {
  const [state, setState] = useState(intialValue);
  const toggle = () => {
    setState((prev) => !prev);
  };
  return [state, toggle];
};

export default useToggle;
