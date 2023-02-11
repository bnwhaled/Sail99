import React from "react";

function Box2() {
  console.log("box2렌더링");
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "purple",
    color: "white",
  };
  return <div style={style}>Box2</div>;
}

export default React.memo(Box2);
