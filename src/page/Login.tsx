import React from "react";
import Logo from "../icon/dog.svg";
import Mail from "../icon/mail.svg";
import Lock from "../icon/lock.svg";
import "./Login.scss";

function Login() {
  return <div className="login">
    <div className="login-logo">
      <img className="login-logo-img" src={Logo} alt="logo" />
      <div className="login-logo-text">개서리</div>
    </div>
    <div className="login-input">
      <img className="login-input-img" src={Mail} alt="mail" />
      <input placeholder="이메일" />
    </div>
    <div className="login-input">
      <img className="login-input-img" src={Lock} alt="lock" />
      <input placeholder="비밀번호" />
    </div>
    <div aria-hidden className="login-button b1">로그인</div>
    <div aria-hidden className="login-button b2">회원가입</div>
  </div>
};

export default Login;