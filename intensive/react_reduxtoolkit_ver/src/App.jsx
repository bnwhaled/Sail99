import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { minusNum, plusNum } from "./redux/modules/counter";

function App() {
  const dispatch = useDispatch();
  const number = useSelector((state) => {
    return state.counter.number;
  });

  const PlusBtn = () => {
    dispatch(plusNum(1));
  };
  const MinusBtn = () => {
    dispatch(minusNum(1));
  };
  return (
    <>
      <div>count from : {number}</div>
      <StBtn onClick={PlusBtn}>+</StBtn>
      <StBtn onClick={MinusBtn}>-</StBtn>
    </>
  );
}

export default App;

const StBtn = styled.button`
  background-color: green;
`;
