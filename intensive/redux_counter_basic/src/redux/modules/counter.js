// action value
const Plus_one = "counter/Plus_one";
const Minus_one = "counter/Minus_one";
const PLUS_N = "counter/PLUS_N";
const MINUS_N = "counter/MINUS_N";

//action creator : action value를 리턴하는 함수
export const plusOne = () => {
  return {
    type: Plus_one,
  };
};
export const minusOne = () => {
  return {
    type: Minus_one,
  };
};

export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload: payload,
  };
};

export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload,
  };
};

//초기상태값이 필요(state)

//보통 변수명 initialState
//객체형태로 만들것
const initialState = {
  number: 0,
};

//리듀서 : state에 변화를 일으키는 함수
//state를 action의 type에 따라 변경시키는 함수
//
//input: state와 action
//action 객체 == action type을 payload만큼 처리하는 것!
//ex : payload가 3일 때
//3만큼을 action type을 해서 dispatch로 보내라는 의미
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
    case PLUS_N:
      return {
        number: state.number + action.payload,
      };
    case MINUS_N:
      return {
        number: state.number - action.payload,
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
//payload와 함께 할당
//
//
//counter내보내기
export default counter;
