import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux"; //스토어를 만드는 API
// import { combineReducers } from "redux"; //reduxer들을 한번에 묶는 API
import counter from "../modules/counter";

//일반리듀서
// const rootReducer = combineReducers({
//   counter: c unter,
// });
// const store = createStore(rootReducer);

//redux 툴킷//
const store = configureStore({
  //객체 리듀서가 들어감(key-value페어)
  reducer: {
    counter: counter,
  },
});

export default store;
