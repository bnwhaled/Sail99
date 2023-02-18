import { createSlice } from "@reduxjs/toolkit";

// Action value
const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

// Action Creator
// Todo를 추가하는 action creator
// export const addTodo = (payload) => {
//   return {
//     type: ADD_TODO,
//     payload,
//   };
// };

// // Todo를 지우는 action creator
// export const deleteTodo = (payload) => {
//   return {
//     type: DELETE_TODO,
//     payload,
//   };
// };

// // Todo를 isDone를 변경하는 action creator
// export const toggleStatusTodo = (payload) => {
//   return {
//     type: TOGGLE_STATUS_TODO,
//     payload,
//   };
// };

// // 상세 페이지에서 특정 Todo만 조회하는 action creator
// export const getTodoByID = (payload) => {
//   return {
//     type: GET_TODO_BY_ID,
//     payload,
//   };
// };

// initial state
const initialState = {
  todos: [
    {
      id: "1",
      title: "리액트",
      body: "리액트를 배워봅시다",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};

// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case DELETE_TODO:
//       return {
//         //state를 펼쳐서 todos를 넣어줌
//         //대괄호안은 그 todos의 값 변경로직
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       };
//     case ADD_TODO:
//       console.log("페이", action.payload);
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//       };

//     case TOGGLE_STATUS_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo) => {
//           if (todo.id === action.payload) {
//             return {
//               ...todo,
//               isDone: !todo.isDone,
//             };
//           } else {
//             return todo;
//           }
//         }),
//       };

//     case GET_TODO_BY_ID:
//       return {
//         ...state,
//         todo: state.todos.find((todo) => {
//           return todo.id === action.payload;
//         }),
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
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleStatusTodo: (store, action) => {},
    getTodoByID: (state, action) => {},
  },
});

//만든 리듀서를 이렇게 내보내고
export default counterSlice.reducer;
//action도 만들어 구조분해할당으로 내보냄
//이 actions는 아래 plusNum, minsNum 이 가진 객체를 가지고있음
//즉 action은 리듀서들을 의미
export const { addTodo, deleteTodo, toggleStatusTodo, getTodoByID } =
  counterSlice.actions;
