import React, { useEffect } from "react";
import styled from "styled-components";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import jwtDecode from "jwt-decode";

//클라이언트ID
// 991532386696-5c4ns2541gdcj75otffjvn7t2dbkoflh.apps.googleusercontent.com

const GoogleButton = () => {
  const onFulfilled = (res) => {
    console.log("fulfilled!");
    console.log(res);
  };

  const onRejected = () => {
    console.log("Rejected!");
  };

  return (
    <GoogleOAuthProvider clientId="991532386696-5c4ns2541gdcj75otffjvn7t2dbkoflh.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={onFulfilled}
        onFailure={onRejected}
        buttonText="구글 소셜 로그인"
      />
    </GoogleOAuthProvider>
  );
};
export default GoogleButton;

// step 1 : redirect 토큰값넘겨주고
// step 2 : 백엔드
// step 3 : 인가코드 받아서 요청시에 뿌려주기
// 인가코드 : 쿠키 / 로컬스토리지 (보통 쿠키)

// .env 파일에 저장해놓은 clientID

// function GoogleButton() {
//   const clientID =
//     "991532386696-5c4ns2541gdcj75otffjvn7t2dbkoflh.apps.googleusercontent.com";

//   return (
//     <GoogleOAuthProvider clientId={clientID}>
//       <GoogleLogin
//         onSuccess={async (credentialResponse) => {
//           const response = await axios.post("https://sparta-hd.shop/api");
//           const data = response.data;
//           localStorage.setItem("authData", data);
//           console.log(data);
//         }}
//         shape="circle"
//         width="447px"
//         text="signin_with"
//         onError={() => {
//           console.log("Login Failed");
//         }}
//       />
//     </GoogleOAuthProvider>
//   );
// }

// export default GoogleButton;
