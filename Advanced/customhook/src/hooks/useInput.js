import { useState } from "react";

const useInput = () => {
  //state
  const [value, setValue] = useState("");

  //handler
  const inputHandler = (e) => {
    setValue(e.target.value);
  };
};

export default useInput;
