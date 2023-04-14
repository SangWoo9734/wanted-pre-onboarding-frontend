import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const SignIn = () => {
  const [userInputEmail, setUserInputEmail] = useState<String>("");
  const [userInputPassWord, setUserInputPassWord] = useState<String>("");
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(true);

  useEffect(() => {
    if (userInputEmail.includes("@") && userInputPassWord.length >= 8) {
      setIsButtonEnabled(false);
    } else {
      setIsButtonEnabled(true);
    }
  }, [userInputEmail, userInputPassWord]);

  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <label>이메일: </label>
        <input
          data-testid="email-input"
          onChange={(event) => {
            setUserInputEmail(event.target.value);
          }}
        />
      </div>
      <div>
        <label>비밀번호: </label>
        <input
          data-testid="password-input"
          onChange={(event) => {
            setUserInputPassWord(event.target.value);
          }}
        />
      </div>
      <div>
        <Link to="/todo">
          <button data-testid="signin-button" disabled={isButtonEnabled}>
            로그인
          </button>
        </Link>
        <p>
          새로운 회원이신가요? <Link to="/signup">회원가입하기</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
