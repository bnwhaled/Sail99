import axios from "axios";
import React from "react";

function GoogleLogins() {
  const clientID =
    "991532386696-5c4ns2541gdcj75otffjvn7t2dbkoflh.apps.googleusercontent.com";
  const redirectURI = "http://lifequotesworld98.shop:3000/login";
  const loginBtnHandler = () => {
    window.location.href =
      "https://accounts.google.com/o/oauth2/auth?" +
      `client_id={${clientID}}&` +
      `redirect_uri={${redirectURI}}&` +
      "response_type=token&" +
      "scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
    //`https://accounts.google.com/o/oauth2/auth?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;
  };

  return (
    <div>
      <button onClick={loginBtnHandler}>구글로그인</button>
    </div>
  );
}

export default GoogleLogins;
