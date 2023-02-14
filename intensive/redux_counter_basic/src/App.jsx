import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Minus_one, Plus_one } from "./redux/modules/counter";
import { plusOne, minusOne } from "./redux/modules/counter";
import { plusN, minusN } from "./redux/modules/counter";

function App() {
  const [number, setNumber] = useState(0);
  //여기서 store에 접근해, counter의 값을 읽어오고 싶으면,
  //useSelector를 사용해 가져올 수 있음
  //return한 state를 사용가능

  const counter = useSelector((state) => {
    return state.counter;
  });

  // event값확인
  // useEffect(() => {
  //   console.log("number=>" + number);
  // }, [number]);
  // console.log("counter->", counter.number);

  // dispatch를 가져와보자 - action타고 store로던지기
  const dispatch = useDispatch();

  return (
    <>
      <div>현재카운트:{counter.number}</div>;
      <div>
        <input
          type="number"
          value={number}
          //문자열로받은값숫자로 ->  +붙이기
          onChange={(event) => setNumber(+event.target.value)}
        />
      </div>
      {/* setState는 바로 넣어주면되지만
    redux는 disptch가 action을 던져주는 작업이 필요! 
    고로 이벤트발생시 dispatch로 action을 보내야함 
    
    아래에서는 onClick시 +1을 더해주어야 하는데 
    module에서 로직을 가져와야해서 module수정
    */}
      <button
        onClick={() => {
          // dipatch인자는 action객체를 넣어줘야함
          dispatch(plusN(number));
          // type은 Plus_one 타입이됨
          // payload : 지금은 신경꺼
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minusN(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
