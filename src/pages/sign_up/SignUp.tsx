import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const SignUp = () => {
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
      <h1>Sign Up</h1>
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
      <Link to="/signin">
        <button data-testid="signup-button" disabled={isButtonEnabled}>
          회원가입
        </button>
      </Link>
    </div>
  );
};

export default SignUp;
