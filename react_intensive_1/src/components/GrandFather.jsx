import React from "react";
import { FamilyContext } from "../context/FamilyContext";
import Child from "./Child";
//G => child 데이터줘서 child가 받도록
function GrandFather() {
  const houseName = "스파르타";
  const Money = "10000";
  return (
    <FamilyContext.Provider
      value={{
        Money,
        houseName,
      }}
    >
      <Child />;
    </FamilyContext.Provider>
  );
}

export default GrandFather;
