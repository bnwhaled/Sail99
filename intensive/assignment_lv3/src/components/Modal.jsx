import { useRef, useState } from "react";
import styled from "styled-components";

export const Modal = () => {
  //모달버튼1
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  //모달버튼2
  const [isOpen2, setIsOpen2] = useState(false);

  const openModalHandler2 = () => {
    setIsOpen2(!isOpen2);
  };
  //모달 외부클릭 닫기
  const [isClose, setIsClose] = useState(true);
  const closeModalHandler = () => {
    setIsClose(!isClose);
  };
  const outSection = useRef();

  return (
    <ModalWrap>
      <h1>Modal</h1>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {isOpen ? "Opened !" : "Open Modal"}
        </ModalBtn>
        {isOpen ? (
          <ModalBackdrop>
            <ModalView onClick={!openModalHandler}>
              <ModalViewOne onClick={!openModalHandler}>
                닫기버튼으로 닫기
                <button onClick={openModalHandler}>닫기</button>
                <button onClick={openModalHandler}>확인</button>
              </ModalViewOne>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>

      {/* 모달박스 2 => 외부 누르면 닫힘 */}
      <ModalContainer>
        <ModalBtn onClick={openModalHandler2}>
          {isOpen2 ? "Opened !" : "Open Modal"}
        </ModalBtn>
        {isOpen2 === true ? (
          <ModalBackdrop
            ref={outSection}
            onClick={(e) => {
              if (outSection.current === e.target) {
                setIsOpen2(false);
              }
            }}
          >
            <ModalView>
              <ModalViewOne onClick={!openModalHandler}>
                모달창 외부클릭 닫히기
                <button onClick={openModalHandler2}>X</button>
              </ModalViewOne>
            </ModalView>
          </ModalBackdrop>
        ) : null}
        {isOpen2 ? <div style={{ backgroundColor: "gray" }}></div> : null}
      </ModalContainer>
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  padding: 50px;
  border: 1px solid gray;
  margin-top: 10px;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

const ModalBtn = styled.button`
  background-color: #0033ffc0;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10;
`;

const ModalView = styled.div`
  text-align: center;
  width: 300px;
  height: 100px;
  background-color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

const ModalViewOne = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

// export const Modal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModalHandler = () => {
//     setIsOpen(!isOpen);
//   };

//   const [isOpen2, setIsOpen2] = useState(false);

//   const openModalHandler2 = () => {
//     setIsOpen2(!isOpen2);
//   };

//   return (
//     <>
//       <StMain>
//         <Box>
//           <P>Modal</P>
//           {/* 취소, 확인 버튼이 있고 overlay 클릭시 모달이 안닫힘 */}
//           <ModalContainer>
//             <ModalOverlay onClick={openModalHandler}>
//               {isOpen ? "Open" : "Open Modal"}
//             </ModalOverlay>
//           </ModalContainer>

//           {/* 닫기 버튼만 있고 overlay 클릭시 모달이 닫힘 */}
//           <ModalContainer2>
//             <ModalOverlay2 onClick={openModalHandler2}>
//               {isOpen2 ? "Open" : "Open Modal"}
//             </ModalOverlay2>
//           </ModalContainer2>
//         </Box>
//       </StMain>
//     </>
//   );
// };
