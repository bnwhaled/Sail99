import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const todos = useSelector(({ todos }) => todos);
  const dispatch = useDispatch();

  //추가버튼핸들러
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return;

    dispatch(
      addTodo({
        title,
        body,
        isDone: false,
      })
    );
  };

  return (
    <StinputContainer>
      <span>Todolist</span>
      <br />
      <form onSubmit={onSubmitHandler}>
        <br />
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />

        <Stinputbtn>+</Stinputbtn>
      </form>
    </StinputContainer>
  );
};

export default AddForm;

//인풋박스스타일(제목 내용입력칸)
const StinputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Stinputbtn = styled.button`
  appearance: auto;
  background-color: #f3f3e1;
  border-radius: 20px;
  width: 30px;
  height: 20px;
  cursor: pointer;
`;
