import React from "react";
import styled from "styled-components";
import Selectfn from "./components/Selectfn";
import { Modal } from "./components/Modal";
import Input from "./components/Input";
import Button from "./components/Button";

const App = () => {
  return (
    <BtnTotalContainer>
      <Button />
      <Input />
      <Modal />
      <Selectfn />
    </BtnTotalContainer>
  );
};

export default App;

const BtnTotalContainer = styled.div`
  font-family: "Times New Roman", Times, serif;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
