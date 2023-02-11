import React from "react";

function Box3({ initCount }) {
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "red",
    color: "white",
  };
  console.log("box3렌더링");
  return (
    <div style={style}>
      <button onClick={initCount}>초기화</button>
    </div>
  );
}

export default React.memo(Box3);
