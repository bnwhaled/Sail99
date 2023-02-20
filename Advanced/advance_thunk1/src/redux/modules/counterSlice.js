import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

//1. 청크함수생성해 export, 이름앞에는 보통 __(언더바*2)

export const __addNumber = createAsyncThunk(
  //1. input 2개(이름, 함수)
  "ADD_NUMBER_WAIT",
  //1.함수에도 인자 2개(payload와 기능이들어간 thunkAPI)
  //1.{}안에 로직 : 3초 wait : setTimeout
  (payload, thunkAPI) => {
    setTimeout(() => {
      //1.thunk에도 dispatch있고 기능 비슷 이전payload그대로 쓰자.
      //1. 받아온 값을 원래 actioncreator로 넣어주면 됨
      //1@@ app.jsx에서 import
      thunkAPI.dispatch(addNumber(payload));
    }, 3000);
  }
);

export const __minusNumber = createAsyncThunk(
  //1. input 2개(이름, 함수)
  "MINUS_NUMBER_WAIT",
  //1.함수에도 인자 2개(payload와 기능이들어간 thunkAPI)
  //1.{}안에 로직 : 3초 wait : setTimeout
  (payload, thunkAPI) => {
    setTimeout(() => {
      //1.thunk에도 dispatch있고 기능 비슷 이전payload그대로 쓰자.
      //1. 받아온 값을 원래 actioncreator로 넣어주면 됨
      //1@@ app.jsx에서 import
      thunkAPI.dispatch(minusNumber(payload));
    }, 3000);
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },
    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { addNumber, minusNumber } = counterSlice.actions;
