import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteTodo } from "../redux/modules/todos";
import { doneTodo } from "../redux/modules/todos";
import Router from "../shared/Router";

const TodoListContainer = () => {
  const todos = useSelector((state) => state.todos.todos);
  console.log("todos", todos);

  const dispatch = useDispatch();
  //완료버튼 핸들러
  const isDoneBtnHandler = (id) => {
    console.log("done", id);
    dispatch(doneTodo({ id }));
  };
  //삭제버튼 핸들러
  const removeBtnHandler = (id) => {
    console.log("romove", id);
    dispatch(deleteTodo({ id }));
  };

  return (
    <StTododiv>
      <StH1>doing</StH1>
      {todos
        .filter((value) => value.isDone === false)
        .map((todo) => (
          <StTodobox key={todo.id}>
            {todo.title}
            <br />
            {todo.body}
            <br />
            <Stboxbtn onClick={() => isDoneBtnHandler(todo.id)}>done</Stboxbtn>
            <br />
            <Stboxbtn onClick={() => removeBtnHandler(todo.id)}>
              delete
            </Stboxbtn>
          </StTodobox>
        ))}
      <StH1>done</StH1>
      {todos
        .filter((value) => value.isDone === true)
        .map((todo) => (
          <StTodobox key={todo.id}>
            {todo.title}
            <br />

            {todo.body}
            <br />

            <Stboxbtn onClick={() => isDoneBtnHandler(todo.id)}>back</Stboxbtn>
            <br />
            <Stboxbtn onClick={() => removeBtnHandler(todo.id)}>
              delete
            </Stboxbtn>
          </StTodobox>
        ))}
    </StTododiv>
  );
};

export default TodoListContainer;

const StTododiv = styled.div`
  gap: 50px;
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
  column-count: 2;
`;

const StH1 = styled.h1`
  font-size: 30px;
  font-family: serif;
`;

const Stboxbtn = styled.button`
  background-color: black;
  color: white;
  border-radius: 10px;
  width: 50px;
  height: 20px;
`;
