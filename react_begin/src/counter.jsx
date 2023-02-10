import React, { useState } from "react";
import "App.css";

function App() {
  const [count, setCount] = useState(0);
  const plusCountHnder = () => {
    const plusCount = count + 1;
    setCount(plusCount);
  };
  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          const minusCount = count - 1;
          setCount(minusCount);
        }}
      >
        -
      </button>
      <button onClick={plusCountHnder}>+</button>
    </>
  );
}

export default App;
