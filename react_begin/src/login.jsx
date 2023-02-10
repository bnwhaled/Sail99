import React, { useState } from "react";
import "App.css";

function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  //아이디값 바뀌는 변수박스 =
  const changeIdHandler = (changeId) => {
    setId(changeId.target.value);
  };

  //비번값 바뀌는 변수박스 =
  const changePwHandler = (changePw) => {
    setPw(changePw.target.value);
  };

  return (
    <>
      <div>
        ID:
        <input
          type="text"
          value={id}
          onChange={changeIdHandler}
          // {function (changeId) {
          //   //값 바뀌는 거 여기에 하던지 위에 변수담아서 만들던지 상관 ㄴ
          //   setId(changeId.target.value);
          // }}
        />
      </div>

      <div>
        PW:
        <input
          type="password"
          value={pw}
          onChange={changePwHandler}
          // {function (changePw) {
          //   setPw(changePw.target.value);
          // }}
        />
      </div>

      {console.log("id", id)}
      {console.log("pw", pw)}
      <div>
        <button
          onClick={function () {
            alert(`아이디 ${id} 비번 ${pw}`);
            setId(""); // 이렇게 초기화해라
            setPw(""); // *2
          }}
        >
          login
        </button>
      </div>
    </>
  );
}

export default App;
