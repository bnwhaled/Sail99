import React from "react";

function Box1() {
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "green",
    color: "white",
  };
  console.log("box1렌더링");
  return <div style={style}>Box1</div>;
}

export default React.memo(Box1);
