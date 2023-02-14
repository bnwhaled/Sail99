import React from "react";
import styled from "styled-components";
import "./App.css";
import AddForm from "./components/Addform";
import TodoListContainer from "./components/TodoListContainer";

const App = () => {
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
  max-width: 1400px;
  margin: 0 auto;
  background-color: #f5f5dc;
  height: 700px;
  border-radius: 30px;
`;

//투두리스트스탈(박스모양)
