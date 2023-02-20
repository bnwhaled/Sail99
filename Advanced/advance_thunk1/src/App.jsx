import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addNumber } from "./redux/modules/counterSlice";
// import { minusNumber } from "./redux/modules/counterSlice";
import { __minusNumber } from "./redux/modules/counterSlice";
import { __addNumber } from "./redux/modules/counterSlice";

function App() {
  const globalNumber = useSelector((state) => state.counter.number);
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const addNumBtn = () => {
    // dispatch(addNumber(+number));
    // 2. import 해서 addNumber,minusNumber를 청크로 치환
    dispatch(__addNumber(+number));
  };
  const minusNumBtn = () => {
    dispatch(__minusNumber(+number));
  };

  return (
    <>
      <div>{globalNumber}</div>
      <input
        type="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={addNumBtn}>+</button>
      <button onClick={minusNumBtn}>-</button>
    </>
  );
}

export default App;
