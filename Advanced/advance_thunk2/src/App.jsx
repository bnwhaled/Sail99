import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "./redux/modules/todosSlice";

const App = () => {
  const dispatch = useDispatch();

  //리듀서 세팅값 구조분해할당으로 가져오기
  const { isLoding, error, todos } = useSelector((state) => {
    return state.todos;
  });
  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  //가져온 값 사용
  //로딩중일때 출력
  if (isLoding) {
    return <div>로딩중..</div>;
  }
  //에러일때 출력
  if (error) {
    return <div>{error.message}</div>;
  }

  //정상이면 출력
  return (
    <div>
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
      })}
    </div>
  );
};

export default App;
