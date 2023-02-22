import React from "react";
import Select from "react-select";
import styled from "styled-components";

const Selectfn = () => {
  const options = [
    {
      value: "react",
      label: "react",
    },
    {
      value: "spring",
      label: "spring",
    },
    {
      value: "Node",
      label: "Node",
    },
    {
      value: "axios",
      label: "axios",
    },
  ];
  return (
    <div>
      <StselectWrapBox>
        <h1>&nbsp;Select</h1>
        <Select options={options} />
        {/* <select style={{ marginLeft: "5px" }} name="React" id="selectbox">
          <option>language</option>
          <option>React</option>
          <option>Spring</option>
          <option>redux</option>
          <option>axios</option>
        </select> */}
      </StselectWrapBox>
    </div>
  );
};

export default Selectfn;

const StselectWrapBox = styled.div`
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  border: 5px solid blue;
  width: 50%;
  margin-top: 10px;
  width: 400px;
  height: 200px;
  padding: 50px;
  border: 1px solid gray;
`;
