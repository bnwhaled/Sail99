// action value
const ADD_TODOLIST = "ADD_TODOLIST";

//action creator
export const addTodoList = (payload) => {
  return { type: ADD_TODOLIST, payload };
};
// 이 초기값이 const [A , setA ] = useState(0) 에서 이 useState초기값을 의미
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
      body: "소소하게 시그니엘",
      isDone: false,
    },
  ],
};

/////////리듀서구역/////////
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOLIST:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default todos;
