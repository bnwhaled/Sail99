import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

// const rootReducer = combineReducers({
//   todos,
// });
// const store = createStore(rootReducer);

//=========== TOOLKIT
const store = configureStore({
  // 객체인 리듀서가 들어감
  // counter.js
  reducer: {
    todos,
  },
});

export default store;
