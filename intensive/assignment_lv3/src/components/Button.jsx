import React from "react";
import styled from "styled-components";

export const Button = () => {
  //alert버튼1
  const alertPrimary = () => {
    alert("알람버튼 ");
  };
  //alert버튼2
  const sign = () => window.prompt("뭐든 적어");

  return (
    <>
      <h1>&nbsp;Button</h1>
      <Stwrapbox>
        <StlargePrimayBtn onClick={alertPrimary}>
          Large Primary Button
        </StlargePrimayBtn>
        <StmediumBtn>Medium</StmediumBtn>
        <StsmallBtn>Small</StsmallBtn>
      </Stwrapbox>
      <br />
      <Stwrapbox>
        <StlargePrimayBtn
          style={{
            borderColor: "orange",
            color: "red",
          }}
          onClick={sign}
        >
          Large Negative Button
        </StlargePrimayBtn>
        <StmediumBtn
          style={{
            backgroundColor: "orange",
            borderColor: "orange",
            color: "red",
          }}
        >
          Medium
        </StmediumBtn>
        <StsmallBtn
          style={{
            backgroundColor: "orange",
            borderColor: "orange",
            color: "red",
          }}
        >
          Small
        </StsmallBtn>
      </Stwrapbox>
    </>
  );
};

export default Button;

export const Stwrapbox = styled.div`
  display: flex;
  flex-direction: row;
`;

const StlargePrimayBtn = styled.button`
  padding: 10px;
  border: 2px solid lightgreen;
  width: 200px;
  border-radius: 5px;
  margin: 0px 5px 0px 5px;
  height: 30px;
  display: flex;
  background-color: white;
  font-family: cursive;

  //가로세로 중앙정렬
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StmediumBtn = styled.button`
  padding: 10px;
  border: 2px solid lightgreen;
  background-color: lightgreen;
  width: 100px;
  height: 25px;
  border-radius: 5px;
  margin: 0px 5px 0px 5px;
  display: flex;

  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: cursive;
  cursor: pointer;
`;

const StsmallBtn = styled.button`
  padding: 10px;
  border: 2px solid lightgreen;
  background-color: lightgreen;
  max-width: 150px;
  height: 10px;
  border-radius: 5px;
  margin: 0px 5px 0px 5px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: cursive;
  cursor: pointer;
`;
