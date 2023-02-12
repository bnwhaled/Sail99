//초기상태값이 필요
//보통 변수명 initialState
//객체형태로 만들것
const initialState = {
  number: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "Plus_one": //action의 타입은 plus_one이됨
      return {
        number: state.number + 1,
      };
    case "Minus_one": //action의 타입이 minus_one됨
      return {
        number: state.number - 1,
      };
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
export default counter;
