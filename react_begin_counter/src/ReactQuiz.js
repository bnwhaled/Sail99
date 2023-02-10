import React, { useState } from "react";
import "App.css";

const App = () => {
  // const users = [
  //   { id: 1, age: 30, name: "송중기" },
  //   { id: 2, age: 24, name: "송강" },
  //   { id: 3, age: 21, name: "김유정" },
  //   { id: 4, age: 29, name: "구교환" },
  // ];
  //위에애를 state로 바꾸기x
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const clickRemoveButtonHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const clickAddButtonHandler = () => {
    // 1. 새로운형태(o의r 똑같이) 이놈을 만든다.
    // 이놈 : { id: 1, age: 30, name: "송중기" }
    //2. 얘를 배열에 더한다.
    //3. 밑에 시작허자
    const addBox = {
      id: users.length + 1, //id이름표 추가하기
      age,
      name,
    };
    setUsers([...users, addBox]);
  };

  return (
    <>
      <div>
        이름 : <input value={name} onChange={nameChangeHandler} />
        <br />
        나이 :&nbsp;
        {/* &nbsp; == 한칸띄워줌 */}
        <input value={age} onChange={ageChangeHandler} />
        <br />
        <button onClick={clickAddButtonHandler}>추가하기</button>
      </div>
      <div className="app-style">
        {users.map((item) => {
          return (
            // 반복되는 값에는 아래처럼 고유한 이름표가 필요=
            //key = (매개.이름표)
            //이것을 관리하기 위해서는 useState로 관리필요!
            <div key={item.id} className="compo-style">
              {item.age} - {item.name}
              <button onClick={() => clickRemoveButtonHandler(item.id)}>
                삭제
              </button>
            </div>
          );
        })}
        {/*  */}
        {/* <div className="compo-style">
        {users[0].age} - {users[0].name}
      </div>
      <div className="compo-style">
        {" "}
        {users[1].age} - {users[1].name}
      </div>
      <div className="compo-style">
        {" "}
        {users[2].age} - {users[2].name}
      </div>
      <div className="compo-style">
        {" "}
        {users[3].age} - {users[3].name}
      </div> */}
      </div>
    </>
  );
};

export default App;
