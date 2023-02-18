import { createSlice } from "@reduxjs/toolkit";

// Action value
// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";
// const DONE_TODO = "DONE_TODO";

// Action Creator
// export const addTodo = (payload) => {
//   return { type: ADD_TODO, payload };
// };
// export const deleteTodo = (payload) => {
//   return { type: DELETE_TODO, payload };
// };
// export const doneTodo = (payload) => {
//   return { type: DONE_TODO, payload };
// };

// 초기값 initialState
export const initialState = {
  counter: 0,
  todos: [],
};

// 리듀서파트
// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         counter: state.counter + 1,
//         todos: [...state.todos, { ...action.payload, id: state.counter }],
//       };
//     case DELETE_TODO:
//       return {
//         counter: state.counter,
//         todos: [
//           ...state.todos.filter((value) => {
//             if (value.id !== action.payload.id) return value;
//           }),
//         ],
//       };
//     case DONE_TODO:
//       console.log(action.payload);
//       return {
//         counter: state.counter,
//         todos: [
//           ...state.todos.map((value) => {
//             if (value.id === action.payload.id) {
//               return { ...value, isDone: !value.isDone };
//             } else {
//               return value;
//             }
//           }),
//         ],
//       };

//     default:
//       return state;
//   }
// };

const counterSlice = createSlice({
  //key value객체 인자로
  name: "todos",
  initialState,
  reducers: {
    //보면 toolkit은 initailState에 직접 접근
    // 불변성을 신경쓰지 않아도됨 :  immer라는 애가 관리해줌

    addTodo: (state, action) => {
      return {
        counter: state.counter + 1,
        todos: [...state.todos, { ...action.payload, id: state.counter }],
      };
    },
    deleteTodo: (state, action) => {
      return {
        counter: state.counter,
        todos: [
          ...state.todos.filter((value) => {
            if (value.id !== action.payload.id) return value;
          }),
        ],
      };
    },
    doneTodo: (state, action) => {
      return {
        counter: state.counter,
        todos: [
          ...state.todos.map((value) => {
            if (value.id === action.payload.id) {
              return { ...value, isDone: !value.isDone };
            } else {
              return value;
            }
          }),
        ],
      };
    },
  },
});

//만든 리듀서를 이렇게 내보내고
export default counterSlice.reducer;
//action도 만들어 구조분해할당으로 내보냄
//이 actions는 아래 plusNum, minsNum 이 가진 객체를 가지고있음
//즉 action은 리듀서들을 의미
export const { addTodo, deleteTodo, doneTodo } = counterSlice.actions;
