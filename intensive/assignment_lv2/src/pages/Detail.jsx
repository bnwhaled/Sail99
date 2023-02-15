import React from "react";
import styled from "styled-components";
import todos from "../redux/modules/todos";

function Detail() {
  return (
    <>
      <div
        style={{
          fontSize: "50px",
        }}
      >
        Detail
      </div>
      <Stdetailbox key={todos}>
        <div>{todos.id}</div>
        <br />
        <br />
        <div>{todos.title}</div>
        <br />
        <br />
        <div>{todos.body}</div>
        <br />
        <br />
      </Stdetailbox>
    </>
  );
}

export default Detail;

const Stdetailbox = styled.div`
  justify-content: center;
  display: flex;
  background-color: rgb(117, 117, 188);
  flex-direction: column;
  margin: 200px 200px 200px 200px;
  align-items: center;
  text-align: center;
  height: 400px;
  max-width: 800px;
  color: white;
`;
