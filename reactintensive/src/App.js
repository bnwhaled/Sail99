import React from 'react'
import "./App.css"
import styled from "styled-components"

//스타일링 css in js --> styled component 로 하는 방법 강의
// div는 컴포명 ``안에 인수 넣어주면 진행
//styled.뒤에는 항상 html 요소 옴

const StContainer = styled.div`

`
const StBox = styled.div`
width : 100px;
height : 100px;
border : 1px solid ${(props) => props.borderColor}
margin : 20px;
background-color : ${(props) => props.backgroundColor}
`

// ex: p태그에 적용
// const StP = styled.p`
// color : blue;
// `


function App() {
  return (
      <StContainer>
    <StBox borderColor="red" backgroundColor = "yellow">빨강박스</StBox>
    <StBox borderColor="green">박스</StBox>
    <StBox borderColor="blue">박스</StBox>

          </StContainer>
  )
}

export default App