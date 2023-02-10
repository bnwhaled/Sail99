import React, { useState } from "react";
import Card from "./components/Card";
import "App.css";
import Addbox from "./components/Addbox";

const App = () => {
  //컴포 틀
  const [users, setUsers] = useState([
    { isDone: false, id: 1, todoTitle: "공부1", todoContent: "인강듣기1" },
  ]);

  console.log(users);

  //Todo 작성제목
  const [todoTitle, setTodotitle] = useState(" ");
  const todotitleChangeHandler = function (event) {
    setTodotitle(event.target.value);
    console.log(todoTitle);
  };
  //Todo 작성내용
  const [todoContent, setTodoContent] = useState("");
  const todoContentChangeHandler = function (event) {
    setTodoContent(event.target.value);
    console.log(todoContent);
  };
  //할일추가버튼
  const todoAddbtnHandler = () => {
    const addCompo = {
      id: new Date(),
      todoTitle,
      todoContent,
    };

    //setUsers([...users, addCompo]);
    setUsers((prev) => [...prev, addCompo]);
  };

  //삭제버튼
  const todoRemovebtnHandler = (id) => {
    const usersDelete = users.filter((user) => user.id !== id);
    setUsers(usersDelete);
  };

  //완료버튼
  //객체 isDone이 true면
  const isDonebtnHandler = (id) => {
    setUsers((prev) => {
      const newArr = [...prev];
      const target = newArr.filter((user) => user.id === id)[0];
      const newTarget = { ...target, isDone: !target.isDone };

      const targetIndex = newArr.findIndex((user) => user.id === id);
      newArr.splice(targetIndex, 1, newTarget);

      return newArr;
    });
  };

  /*
  1. 컴포넌트 클릭;
  2. 그 친구의 id를 가져온다;
  3. users에 저장된 데이터에서 isDone: ture => false;
  { isDone: true, id: 1, todoTitle: "공부1", todoContent: "인강듣기1" }
   */

  return (
    <>
      {/* <header>TodoList </header> */}

      {/* 추가내용 적을 input박스틀 */}
      <div className="todoaddbox">
        <Addbox
          title={todoTitle}
          titlechange={todotitleChangeHandler}
          content={todoContent}
          contentchange={todoContentChangeHandler}
          addbtnchange={todoAddbtnHandler}
          setcontent={setTodoContent}
          settitle={setTodotitle}
        />
      </div>

      {/* 컴포박스 틀*/}
      <div className="todobox">
        {users
          .filter((user) => !user.isDone)
          .map((item) => (
            <Card
              data={item}
              remove={todoRemovebtnHandler}
              done={isDonebtnHandler}
            />
          ))}
      </div>

      <div className="done-box">
        {users
          .filter((user) => user.isDone)
          .map((item) => (
            <Card
              data={item}
              remove={todoRemovebtnHandler}
              done={isDonebtnHandler}
            />
          ))}
      </div>
    </>
  );
};
export default App;
