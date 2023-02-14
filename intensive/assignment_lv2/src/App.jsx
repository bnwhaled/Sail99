import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./redux/modules/todos";
import "./App.css";

const App = () => {
  //////////////Addform박스//////////////
  const AddForm = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    //추가버튼핸들러
    const onSubmitHandler = (e) => {
      e.preventDefault();
      if (title === "") return;

      dispatch(
        addTodo({
          id: todos.length + 1,
          title,
          body,
        })
      );
    };

    return (
      <div>
        <form onSubmit={onSubmitHandler}>
          <label>제목입력</label>
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
          <button>추가</button>
        </form>
      </div>
    );
  };

  //////////리스트 박스///////////////
  const TodoListContainer = () => {
    const [isDone, setIsDone] = useState("");
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    //완료버튼 핸들러
    const isDoneBtnHandler = (todo) => {};
    //삭제버튼 핸들러
    const removeBtnHandler = (id) => {
      dispatch(deleteTodo(todos.filter((todos) => todos.id !== id)));
    };
    return (
      <div>
        {console.log(todos)}
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.title}============={todo.body}
            <button onClick={(todo) => isDoneBtnHandler(todo.id)}>완료</button>
            <button onClick={(todo) => removeBtnHandler(todo.id)}>삭제</button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <StContainer>
      <AddForm />
      <TodoListContainer />
    </StContainer>
  );
};

export default App;

//전체스타일(중앙고정)
const StContainer = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  background-color: #f5f5dc;
  height: 700px;
`;

//인풋박스스타일(제목 내용입력칸)
const StinputBox = styled.section`
  margin: 0 auto;
  background-color: red;
`;

//투두리스트스탈(박스모양)
