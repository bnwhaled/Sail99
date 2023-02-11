import React from "react";

function Box3() {
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "red",
    color: "white",
  };
  console.log("box3렌더링");
  return <div style={style}>Box3</div>;
}

export default React.memo(Box3);
