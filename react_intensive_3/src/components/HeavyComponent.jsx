import React, { useState, useMemo } from "react";
// 무거운 로직을 넣을거라 헤비컨포 명명
function HeavyComponent() {
  const [count, setCount] = useState(0);
  const heavywork = () => {
    for (let i = 0; i < 1000000000; i++) {}
    return 100;
  };
  const value = useMemo(() => heavywork(), []);
  // const value = heavywork();
  console.log(`value는 ${value}입니다.`);
  return (
    <>
      <p>난 무겁다</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        누르면 count 증가
      </button>
      <br />
      {count}
    </>
  );
}

export default HeavyComponent;
