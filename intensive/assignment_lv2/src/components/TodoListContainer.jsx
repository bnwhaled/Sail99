import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import styled from "styled-components";
import { deleteTodo } from "../redux/modules/todos";
import { doneTodo } from "../redux/modules/todos";

const TodoListContainer = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  //완료버튼 핸들러
  const isDoneBtnHandler = (id) => {
    dispatch(doneTodo({ id }));
  };
  //삭제버튼 핸들러
  const removeBtnHandler = (id) => {
    dispatch(deleteTodo({ id }));
  };
  return (
    <div>
      <h1>doing</h1>
      {todos
        .filter((value) => value.isDone === false)
        .map((todo) => (
          <StTodobox key={todo.id}>
            {todo.title}
            <br />
            {todo.body}
            <br />
            <br />

            <button onClick={() => isDoneBtnHandler(todo.id)}>완료</button>
            <button onClick={() => removeBtnHandler(todo.id)}>삭제</button>
          </StTodobox>
        ))}
      <h1>done</h1>
      {todos
        .filter((value) => value.isDone === true)
        .map((todo) => (
          <StTodobox key={todo.id}>
            {todo.title}
            <br />
            {todo.body}
            <br />
            <br />

            <button onClick={() => isDoneBtnHandler(todo.id)}>완료</button>
            <button onClick={() => removeBtnHandler(todo.id)}>삭제</button>
          </StTodobox>
        ))}
    </div>
  );
};

export default TodoListContainer;

const StTododiv = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
const StTodobox = styled.div`
  border: 1px solid #ddd;
  width: 20%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 12px;
`;
