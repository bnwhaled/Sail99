import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addTodoList from "./redux/modules/todos";
import styled from "styled-components";

function App() {
  ////////////////헤더 입력구역/////////////////
  const AddForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    //
    // form 태그 submit Handler
    const onClickHandler = (e) => {
      // e.preventDefault();
      // if (title === "") return;

      ///////////////DISPATCH
      dispatch(
        addTodoList({
          id: todos.length + 1,
          title,
        })
      );
    };
    return (
      <div>
        {/* <form onSubmit={onSubmitHandler}> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              console.log(title);
            }}
          />
          <input
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              console.log(content);
            }}
          />
          <button onClick={onClickHandler}>추가하기</button>
        </div>

        {/* </form> */}
      </div>
    );
  };
  //
  ////////////////박스 출력 구역/////////////////
  const AddTodoBox = () => {
    const todos = useSelector((state) => state.todos.todos);
    return (
      <div>
        <div>
          {todos.map((todo) => (
            <div
              style={{
                backgroundColor: "red",
                textAlign: "center",
                alignContent: "center",
                margin: 30,
              }}
              key={todo.id}
            >
              {todo.title}:{todo.body}
            </div>
          ))}
        </div>
        <div>완료구역</div>
      </div>
    );
  };
  //////////////////////////////////////////App 리턴
  return (
    //div ==> style 넣을 것
    <div>
      <AddForm />
      <AddTodoBox />
    </div>
  );
}

// const InputBoxSt = styled.div`
//   display: flex;
//   justify-content: center;
//   text-align: center;
//   margin: auto;
// `;

export default App;
