import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/config/configstore.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // App이 provider영향권 내에 들어옴
  <Provider store={store}>
    <App />
  </Provider>
  // App컴포넌트 이하에서는 store를 사용할 준비가됨
);

reportWebVitals();
