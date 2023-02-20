import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  Error: null,
  isError: false,
};

//1.비동기함수 호출
//==> createAsyncThunk안에 API를 콜하면서 만들수 있음
export const __getTodos = createAsyncThunk(
  "getTodos", //이름
  //함수인자
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:4002/todos");

      //toolkit에서 제공하는 API
      //fulfillwithvaluse ==> Promise 로 resolve(=요청성공한경우 => 성공한 value를가지고 dipatch해주는기능의 API)
      //인자는 reponse 값중 data부분만 넘겨줘라
      console.log("응답", response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("에러", error);
      //
      //rejectWithvalue ==> Promise 로 (=요청실패한경우 => 실패한 value로 dipatch해주는기능의 API)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  // 2. 본래 reducer말고 extroReducer를 보내줘서 동작하게 할 예정
  extraReducers: {
    //통신 진행중일때
    [__getTodos.pending]: (state, action) => {
      //로딩화면 보여주기
      state.isLoading = true;
      state.isError = false;
    },
    //요청 성공시 .fulfilled
    [__getTodos.fulfilled]: (state, action) => {
      console.log("fulfilled : ", action);
      //로딩화면 끝내기
      state.isLoading = false;
      state.isError = false;
      //성공 시 서버로 받아온 값넣어주기
      state.todos = action.payload;
    },
    //요청 오류시
    [__getTodos.rejected]: (state, action) => {
      //로딩화면 끝내기
      state.isLoading = false;
      state.isError = true;
      //실패시 서버로 받아온 값 넣어주기
      state.error = action.payload;
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
