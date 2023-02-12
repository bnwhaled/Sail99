//초기상태값이 필요
//보통 변수명 initialState
//객체형태로 만들것
const initialState = {
  userId: 123,
};

//리듀서 : state에 변화를 일으키는 함수
//즉, state를 action의 type에따라 변경시키는 함수

//** input은 어떤 인자를 받냐 : state와 action ** 중요
//redux팀에서 무조건 이렇게 받게 만듦
//
//state의 초깃값은 initial state
//action은 객체형태로도 있고, action은 타입이라는게 있고 밸류라는게 있다.
//action은 state를 어떻게 수정할건지
const users = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//위 코드는 해석
//counter를 할당하는데 state는 제일위에 만든 기본값이고
//action은 switch를 통해서 설정이되는데 action의 type에 따라 바뀌는 값이 있다
//밑에 작업 수행
//아무것도 없을경우 default: 만 넣어주자
//return state를 하면 initialState에서 받은 counter의 초기값이 리턴됨
//
//
//counter내보내기
export default users;
