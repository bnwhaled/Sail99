// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const DONE_TODO = "DONE_TODO";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const doneTodo = (payload) => {
  return { type: DONE_TODO, payload };
};

// 초기값 initialState
const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트강의보기",
      body: "챕터1부터 챕터 12까지 학습",
      isDone: false,
    },
    {
      id: 2,
      title: "점심먹기",
      body: "메뉴는 삽겹살",
      isDone: false,
    },
    {
      id: 3,
      title: "저녁먹기",
      body: "스테이끼",
      isDone: false,
    },
  ],
};

// 리듀서파트
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    //완료 리듀서
    case DONE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default todos;
