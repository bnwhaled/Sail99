import React, { useState } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

function App() {
  console.log("App 컴포렌더링");
  const [count, setCount] = useState(0);
  const addnumbtn = () => {
    setCount(count + 1);
  };
  const minusnumbtn = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h3>카운트 예제</h3>
      <p>현재카운트 {count}</p>
      <button onClick={addnumbtn}>+</button>
      <button onClick={minusnumbtn}>-</button>
      <div
        style={{
          display: "flex",
          marginTop: 20,
        }}
      >
        <Box1 />

        <Box2 />
        <Box3 />
      </div>
    </div>
  );
}

export default App;
