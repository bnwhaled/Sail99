import { configureStore } from "@reduxjs/toolkit";
// import { configure } from "@testing-library/react";
// import { createStore } from "redux";
// import { combineReducers } from "redux";
import todos from "../modules/todos.js";

// const rootReducer = combineReducers({
//   todos,
// });
// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    todos,
  },
});

export default store;
