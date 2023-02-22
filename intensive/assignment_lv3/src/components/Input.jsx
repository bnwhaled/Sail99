import React, { useState } from "react";

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
    <>
      <h1>&nbsp;Input</h1>
      <form onSubmit={onSubmitPrompt}>
        이름
        <input
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
        />{" "}
        &nbsp; 가격{" "}
        <input
          value={price}
          type="number"
          placeholder="0"
          onChange={(e) => {
            setPrice(Number(e.target.value));
            console.log(price);
          }}
        />
        &nbsp;
        <button>저장</button>
      </form>
    </>
  );
}

export default Input;
