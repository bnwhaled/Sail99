import { configureStore } from "@reduxjs/toolkit";
// import한것은 (slice.reducer를 의미)

import todos from "../modules/todosSlice";

const store = configureStore({
  reducer: { todos: todos },
});

export default store;
