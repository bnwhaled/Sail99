import React from "react";
import styled from "styled-components";

const Select = () => {
  return (
    <>
      <StselectWrapBox>
        <h1>&nbsp;Select</h1>
        <select style={{ marginLeft: "5px" }} name="React" id="selectbox">
          <option>language</option>
          <option>React</option>
          <option>Spring</option>
          <option>redux</option>
          <option>axios</option>
        </select>
      </StselectWrapBox>
    </>
  );
};

export default Select;

const StselectWrapBox = styled.div`
  border-radius: 5px;
  padding: 10px;
  border: 5px solid blue;
  max-width: 500px;
  margin-top: 10px;
  overflow: hidden;
  background-color: red;
`;
