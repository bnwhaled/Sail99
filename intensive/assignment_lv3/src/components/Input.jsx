import React, { useState } from "react";
import styled from "styled-components";

function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const n1 = price;
  const priceComma = n1.toLocaleString("ko-KR");

  //input prompt
  const onSubmitPrompt = (e) => {
    e.preventDefault();
    if (name === "") return;

    // toLocalString() : 숫자 기본형식으로(3자리마다 콤마)

    alert(`이름:${name} & 가격:${priceComma}`);

    setName("");
    setPrice("");
  };

  return (
    <StInputContainer>
      <h1>&nbsp;Input</h1>
      <form onSubmit={onSubmitPrompt}>
        이름
        <StInput
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
        />
        <br /> &nbsp; 가격{" "}
        <StInput
          value={price}
          type="number"
          placeholder="0"
          onChange={(e) => {
            setPrice(Number(e.target.value));
            console.log(price);
          }}
        />
        &nbsp;
        <br />
        <button>저장</button>
      </form>
    </StInputContainer>
  );
}

export default Input;

const StInputContainer = styled.div`
  flex-direction: column;
  padding: 30px;
  border: 1px solid gray;
  text-align: center;
  width: 400px;
  height: 200px;
  padding: 50px;
  border: 1px solid gray;
  margin-top: 10px;
`;

const StInput = styled.input`
  padding-left: 1rem;
  width: 200px;
  height: 30px;
  border-radius: 15px;
`;
