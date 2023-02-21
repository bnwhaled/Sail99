export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const openModalHandler2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <>
      <StMain>
        <Box>
          <P>Modal</P>
          {/* 취소, 확인 버튼이 있고 overlay 클릭시 모달이 안닫힘 */}
          <ModalContainer>
            <ModalOverlay onClick={openModalHandler}>
              {isOpen ? "Open" : "Open Modal"}
            </ModalOverlay>
          </ModalContainer>

          {/* 닫기 버튼만 있고 overlay 클릭시 모달이 닫힘 */}
          <ModalContainer2>
            <ModalOverlay2 onClick={openModalHandler2}>
              {isOpen2 ? "Open" : "Open Modal"}
            </ModalOverlay2>
          </ModalContainer2>
        </Box>
      </StMain>
    </>
  );
};
