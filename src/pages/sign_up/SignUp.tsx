import { userSignUp } from "api/user";
import { getStroageData } from "module/storage";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as S from "./style";

const SignUp = () => {
  const navigate = useNavigate();
  const [userInputEmail, setUserInputEmail] = useState<string>("");
  const [userInputPassWord, setUserInputPassWord] = useState<string>("");
  const [noticMesssage, setNoticeMessage] = useState<string>("");
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(true);

  useEffect(() => {
    if (getStroageData("auth_token") !== null) navigate("/todo");
  });

  useEffect(() => {
    if (userInputEmail.includes("@") && userInputPassWord.length >= 8) {
      setIsButtonEnabled(false);
    } else {
      setIsButtonEnabled(true);
    }
  }, [userInputEmail, userInputPassWord]);

  const onClickSignUpButton = () =>
    userSignUp({
      email: userInputEmail,
      password: userInputPassWord,
    }).then((value) => {
      if (value?.status !== 201) {
        setNoticeMessage(value?.message);
      } else {
        navigate("/signin");
      }
    });

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
          type="password"
          data-testid="password-input"
          onChange={(event) => {
            setUserInputPassWord(event.target.value);
          }}
        />
      </div>
      <div>
        <p>{noticMesssage}</p>
      </div>
      <button
        data-testid="signup-button"
        disabled={isButtonEnabled}
        onClick={onClickSignUpButton}
      >
        회원가입
      </button>
    </div>
  );
};

export default SignUp;
