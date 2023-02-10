import React, { useRef } from "react";

function App() {
  //ref : reference
  const ref = useRef("초기값");
  console.log("ref", ref);

  ref.current = "최신값";
  console.log("ref2", ref);

  return <div>App</div>;
}

export default App;
