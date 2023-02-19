// import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "./axios/api";

function App() {
  //1.input state생성
  //1. JSON으로 가져올 것이기 때문에 초기값을 JSON형식으로 설정해주자
  //1. ==> JSON의 id속성은 자동으로 입력되기 때문에
  //1. id제외 속성만 입력해도됨 ==> {title : " "}
  const [inputValue, setInputValue] = useState({ title: "" });
  const [todos, setTodos] = useState(null);

  // 8. fixID, fixContent의 인풋 state생성
  const [fixId, setFixId] = useState("");
  const [fixContent, setFixContent] = useState("");
  // 비동기함수 asynce await를 안쓰면 데이터가 오기전에 마운트 되버리기때문에
  //async await 로 get줄의 데이터 받아올때까지 기다려주는 await 필요
  const fetchTodos = async () => {
    // const { response } = await axios.get("http://localhost:4000/todos");
    // console.log("response", response);
    //******* 위의response에서 의미있는값 data를 구조분해할당으로 뽑아오기

    const { data } = await api.get("/todos");
    console.log("data", data);
    setTodos(data);
  };

  // 7. 삭제버튼핸들러 : async로 받아야함
  const deleteBtnHandler = async (id) => {
    api.delete(`/todos/${id}`);
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };

  //추가 버튼핸들러
  const onSubmitHandler = async () => {
    // 4.Post 요청 보내기 : 주소로 post보내서, 뿌리려하는 값가져오기(inputValue);
    api.post("/todos", inputValue);
    //6. 같은값을 보내주고 출력을 위해선 state값 변경해줘야함
    // setTodos([...todos, inputValue]);
    //10.위와 같이 하면 id값이 반영이 되지 않음
    //10.아예 DB를 한번더 불러오자
    fetchTodos();
  };

  //8. 수정버튼 핸들러
  //api.패치(~server:port/key/${수정할것의 값찾기(키)},{수정내용 데이터형식동일하게  })
  const onFixBtnHandler = async () => {
    api.patch(`/todos/${fixId}`, {
      title: fixContent,
    });
    //8. 동일하게 state업데이트 필요
    //돌려서 state의 id 와 클릭 id 같으면
    //return item 열어서 title을 fixContent로 변경
    //아니면 그대로
    setTodos(
      todos.map((item) => {
        if (item.id == fixId) {
          return { ...item, title: fixContent };
        } else {
          return item;
        }
      })
    );
  };
  useEffect(() => {
    //DB로 부터 값가져와보자
    fetchTodos();
  }, [inputValue]);
  return (
    <>
      <div>
        {/* 8. 수정영역 : PATCH */}
        <input
          type="text"
          placeholder="수정할 ID"
          value={fixId}
          onChange={(e) => {
            setFixId(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="수정할 Content"
          value={fixContent}
          onChange={(e) => {
            setFixContent(e.target.value);
          }}
        />
        <button onClick={onFixBtnHandler}>수정</button>
      </div>
      <div>
        {/* 인풋영역 */}
        <div>
          <form
            // 3.새로고침 막기
            onSubmit={(e) => {
              e.preventDefault();
              //4.버튼 클릭시 input에 든값(state)을 이용해 DB에저장

              //5. onSubmitHandler
              onSubmitHandler();
            }}
          >
            {/* 1. input값 들여오기 위해 state생성 */}
            <input
              type="text"
              //2. value, onchange 묶기
              //2. onchange값은 초기값이 JSON형태니까 타입맞춰줄것
              value={inputValue.title}
              onChange={(e) => {
                setInputValue({
                  title: e.target.value,
                });
              }}
            />
            {/* 3. form태그내 버튼은 submit이 type으로 자동지정되고
            클릭시 새로고침되므로 방지 필요 :  */}
            <button type="submit">추가</button>
          </form>
        </div>
        {/* 데이터 영역 */}
        {/* optional chaining
        위의 todos가 아직 다읽히지 않고 해당 코드가 읽혔기 때문에(비동기) 
        ?(optional chaining)으로 값읽기
        */}
        {todos?.map((item) => {
          return (
            <div key={item.id}>
              {item.id} : {item.title}
              {/* 6 */}
              &nbsp; {/* 7. */}
              <button onClick={() => deleteBtnHandler(item.id)}> 삭제</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
