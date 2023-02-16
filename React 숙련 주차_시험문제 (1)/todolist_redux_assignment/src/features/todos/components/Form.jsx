import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import nextId from "react-id-generator";
import { addTodo } from "../../../redux/modules/todos.js";

const Form = () => {
  const id = nextId();
  const dispatch = useDispatch();
  const todos = useSelector((todos) => todos.todos);
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  // 추가하기
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
    console.log("T", todos);
  };

  // 추가된 내용 제출
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;

    dispatch(
      addTodo({
        id: todo.length + 1,
        title: todo.title,
        body: todo.body,
        isDone: false,
      })
    );
  };

  return (
    <>
      <StAddForm onSubmit={onSubmitHandler}>
        <StInputGroup>
          <StFormLabel>제목</StFormLabel>
          <StAddInput
            type="text"
            name="title"
            value={todo.title}
            onChange={onChangeHandler}
          />
          <StFormLabel>내용</StFormLabel>
          <StAddInput
            type="text"
            name="body"
            value={todo.body}
            onChange={onChangeHandler}
          />
        </StInputGroup>
        <StAddButton>추가하기</StAddButton>
      </StAddForm>
    </>
  );
};

export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
