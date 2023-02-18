import { createSlice } from "@reduxjs/toolkit";

//action value
// const MINUS_ONE = "MINUS_ONE";
// const PLUS_ONE = "PLUS_ONE";

//action.creator :
//slice에 다들어있음
// export const plusNum = (payload) => {
//   return { type: PLUS_ONE, payload };
// };
// export const minusNum = (payload) => {
//   return { type: MINUS_ONE, payload };
// };

const initialState = {
  number: 0,
};

//밑에서 리듀서 만들었으니 불필요
// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case PLUS_ONE:
//       return {
//         number: state.number + action.payload,
//       };
//     case MINUS_ONE:
//       return {
//         number: state.number - action.payload,
//       };
//     default:
//       return state;
//   }
// };

//counterSlice에는 action creator와 reducer가 모두 들어있음
//아래 방식으로 리듀서 새로만들기
const counterSlice = createSlice({
  //key value객체 인자로
  name: "counter",
  initialState,
  reducers: {
    //보면 toolkit은 initailState에 직접 접근
    // 불변성을 신경쓰지 않아도됨 : immer라는 애가 관리해줌
    plusNum: (state, action) => {
      state.number = state.number + 1;
    },
    minusNum: (state, action) => {
      state.number = state.number - 1;
    },
  },
});

//만든 리듀서를 이렇게 내보내고
export default counterSlice.reducer;
//action도 만들어 구조분해할당으로 내보냄
//이 actions는 아래 plusNum, minsNum 이 가진 객체를 가지고있음
//즉 action은 리듀서들을 의미
export const { plusNum, minusNum } = counterSlice.actions;

//action creator와 reducer가 한번에 해결!

//원래는 이렇게 내보냈쥬
// export default counter;
