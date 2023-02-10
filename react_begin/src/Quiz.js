import React, { useState } from "react";
import "App.css";

function App() {
  const [content, setContent] = useState([]);
  const [write, setWrite] = useState("");
  const contentChangeHandler = (event) => {
    setWrite(event.target.value);
  };
  const addBtn = () => {
    setContent([...content, write]);
  };
  return (
    <>
      <div className="input-style">
        <input value={write} onChange={contentChangeHandler} />
        <button onClick={addBtn}>추가하기</button>
      </div>
      <div className="padding-style">
        {content.map((item) => {
          return <div className="box-style">{item}</div>;
        })}
      </div>
    </>
  );
}

export default App;

// 1. input만들기
// 2. 컴포구역만 만들기
// 2. 추가하기버튼 만들기
// 3. 추가onclick 시 input된 값을 컴포에 보내기
