// 중앙 데이터 관리소(store)를 설정하는 부분
import { createStore } from "redux"; //스토어를 만드는 API
import { combineReducers } from "redux"; //reduxer들을 한번에 묶는 API
import counter from "../modules/counter";
import users from "../modules/users";

//위엔 변수들이 객체형태로 들어감
//값들은 modules의 애들이 전부들어감
const rootReducer = combineReducers({
  counter: counter,
  users,
});

const store = createStore(rootReducer);
//위 reducer가지고 store를 생성
//리턴값을 계속 스토어에 넣어줌
//인자에는 reducer묶음 즉, rootReducer가 들어가야함

export default store;
