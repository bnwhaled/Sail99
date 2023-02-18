import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "./axios/api";

function App() {
  const [inputValue, setInputValue] = useState({ title: "" });
  const [todos, setTodos] = useState(null);

  const [fixId, setFixId] = useState("");
  const [fixContent, setFixContent] = useState("");

  //조회 함수
  const fetchTodos = async () => {
    // const { data } = await axios.get("http://localhost:4000/todos");
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

    //10.아예 DB를 한번더 불러오자
    fetchTodos();
  };

  //8. 수정버튼 핸들러
  const onFixBtnHandler = async () => {
    api.patch(`/todos/${fixId}`, {
      title: fixContent,
    });

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
  }, []);
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
              value={inputValue.title}
              onChange={(e) => {
                setInputValue({
                  title: e.target.value,
                });
              }}
            />
            <button type="submit">추가</button>
          </form>
        </div>
        {/* 데이터 영역 */}
        {/* optional chaining */}
        {todos?.map((item) => {
          return (
            <div key={item.id}>
              {item.id} : {item.title}
              &nbsp;
              <button onClick={() => deleteBtnHandler(item.id)}> 삭제</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
