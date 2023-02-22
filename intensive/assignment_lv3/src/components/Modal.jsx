import { useState } from "react";
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
  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {isOpen ? "Opened !" : "Open Modal"}
        </ModalBtn>
        {isOpen ? (
          <ModalBackdrop>
            <ModalView onClick={!openModalHandler}>
              <ModalViewOne onClick={!openModalHandler}>
                모달창 외부클릭 닫히기
                <button onClick={openModalHandler}>닫기</button>
                <button onClick={!openModalHandler}>확인</button>
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
        {isOpen2 ? (
          <ModalBackdrop onClick={openModalHandler2}>
            <ModalView onClick={!openModalHandler2}>
              <ModalViewOne onClick={!openModalHandler2}>
                모달창 외부클릭 닫히기
                <button onClick={openModalHandler2}>닫기</button>
                <button onClick={!openModalHandler2}>확인</button>
              </ModalViewOne>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};

export const ModalContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-flow: row wrap-reverse;
  justify-content: center;
  align-items: center;
`;

export const ModalBtn = styled.button`
  background-color: purple;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalView = styled.div`
  text-align: center;
  padding: 30px 90px;
  border-radius: 10px;
`;

export const ModalViewOne = styled.div`
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
