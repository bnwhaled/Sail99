import { useEffect, useRef } from "react";

export const useOutsideClick = (handler) => {
  const ref = useRef(null);
  //화면에 접근하기 위해(DOM에접근)useEffect사용
  //==> 접근해서 addEventListner사용
  useEffect(() => {
    function handleClickOutside(event) {
      //ref에 current(DOM요소)담기
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
  return {
    ref,
  };
};
//React
