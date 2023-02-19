import axios from "axios";

//axios를 구성하는 환경설정 관련코드가 입력값으로 들어감: configuration
//1. baseURL 설정 후 export => App.jsx에서 import
const instance = axios.create({
  baseURL: "http://localhost:4001",
});

export default instance;
//10.instance request, response
//인자 : 콜백함수 2개(request, response형태동일)
instance.interceptors.request.use(
  //요청보내기 전 수행 인자 무조건 config
  function (config) {
    console.log("인터셉트 요청 성공");
    return config;
  },
  //오류요청 보내기 전 수행
  //요청자체가 실패한경우
  function (error) {
    console.log("인터셉터 요청오류");
    return Promise.reject(error);
  }
);
//response 받기직전의 액션
instance.interceptors.response.use(
  //서버로부터 정상응답받는 경우
  function (response) {
    console.log("응답성공");
    return response;
  },
  //서버로부터 오류 받는 경우
  function (error) {
    console.log("응답 오류");
    return Promise.reject(error);
  }
);
