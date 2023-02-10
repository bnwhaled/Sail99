import React, { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";

function Child() {
  const style = {
    color: "red",
    fontWeight: 900,
  };
  const data = useContext(FamilyContext);
  console.log("data", data);
  return (
    <div>
      난 막내
      <br />
      할아버지가 울집 이름은 <span style={style}>{data.houseName}</span>라고함
      <br />
      용돈은<span style={style}>{data.Money}원</span>을 줌
    </div>
  );
}

export default Child;
