import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Select from "./components/Select";
import { Modal } from "./components/Modal";
import Input from "./components/Input";
import Button from "./components/Button";

const App = () => {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");

  // const n1 = price;
  // const priceComma = n1.toLocaleString("ko-KR");

  // //input prompt
  // const onSubmitPrompt = (e) => {
  //   e.preventDefault();
  //   if (name === "") return;

  //   // toLocalString() : 숫자 기본형식으로(3자리마다 콤마)

  //   alert(`이름:${name} & 가격:${priceComma}`);

  //   setName("");
  //   setPrice("");
  // };
  return (
    <>
      <Button />
      {/* <h1>&nbsp;Input</h1>
      <form onSubmit={onSubmitPrompt}>
        이름
        <input
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
        />{" "}
        &nbsp; 가격{" "}
        <input
          value={price}
          type="number"
          placeholder="0"
          onChange={(e) => {
            setPrice(Number(e.target.value));
            console.log(price);
          }}
        />
        &nbsp;
        <button>저장</button>
      </form> */}
      <Input />

      {/* 모달 렌더 */}
      <Modal />

      {/* 모달창 외부 클릭시 닫히지 않음
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
      {/* <ModalContainer>
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
      </ModalContainer> */}

      {/* 셀릭박스 렌더 */}
      <Select />
    </>
  );
};

//모달창//
// const Modal = () => {
//   return (
//     <div>
//       <ModalBox>
//         <h1>&nbsp;Modal</h1>

//         <button>click</button>
//         <button>asdf</button>
//       </ModalBox>
//     </div>
//   );
// };

export default App;
//박스 row
// const Stwrapbox = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const StlargePrimayBtn = styled.button`
//   padding: 10px;
//   border: 2px solid lightgreen;
//   width: 200px;
//   border-radius: 5px;
//   margin: 0px 5px 0px 5px;
//   height: 30px;
//   display: flex;
//   background-color: white;
//   font-family: cursive;

//   //가로세로 중앙정렬
//   text-align: center;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
// `;

// const StmediumBtn = styled.button`
//   padding: 10px;
//   border: 2px solid lightgreen;
//   background-color: lightgreen;
//   width: 100px;
//   height: 25px;
//   border-radius: 5px;
//   margin: 0px 5px 0px 5px;
//   display: flex;

//   text-align: center;
//   justify-content: center;
//   align-items: center;
//   font-family: cursive;
//   cursor: pointer;
// `;

// const StsmallBtn = styled.button`
//   padding: 10px;
//   border: 2px solid lightgreen;
//   background-color: lightgreen;
//   max-width: 150px;
//   height: 10px;
//   border-radius: 5px;
//   margin: 0px 5px 0px 5px;
//   display: flex;
//   text-align: center;
//   justify-content: center;
//   align-items: center;
//   font-family: cursive;
//   cursor: pointer;
// `;

const StselectWrapBox = styled.div`
  border-radius: 5px;
  padding: 10px;
  border: 5px solid blue;
  max-width: 500px;
  margin-top: 10px;
  overflow: hidden;
  background-color: red;
`;

// export const Modal = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   const openModalHandler = () => {
//   setIsOpen(!isOpen);
//   };

//   const [isOpen2, setIsOpen2] = useState(false);

//   const openModalHandler2 = () => {
//   setIsOpen2(!isOpen2);
//   };

//   return (
//   <>
//   <StMain>
//   <Box>
//   <P>Modal</P>
//   {/* 취소, 확인 버튼이 있고 overlay 클릭시 모달이 안닫힘 */}
//   <ModalContainer>
//   <ModalOverlay onClick={openModalHandler}>
//   {isOpen ? "Open" : "Open Modal"}
//   </ModalOverlay>
//   </ModalContainer>

//   {/* 닫기 버튼만 있고 overlay 클릭시 모달이 닫힘 */}
//   <ModalContainer2>
//   <ModalOverlay2 onClick={openModalHandler2}>
//   {isOpen2 ? "Open" : "Open Modal"}
//   </ModalOverlay2>
//   </ModalContainer2>
//   </Box>
//   </StMain>
//   </>
//   );
//   }
