import axios from "axios";

//axios를 구성하는 환경설정 관련코드가 입력값으로 들어감: configuration
//1. baseURL 설정 후 export => App.jsx에서 import
const instance = axios.create({
  baseURL: "http://localhost:4000",
});

export default instance;
