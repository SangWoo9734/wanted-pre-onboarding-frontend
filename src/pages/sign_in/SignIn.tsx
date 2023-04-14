import { userSignIn } from "api/user";
import { getStroageData } from "module/storage";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";

const SignIn = () => {
  const navigate = useNavigate();
  const [userInputEmail, setUserInputEmail] = useState<string>("");
  const [userInputPassWord, setUserInputPassWord] = useState<string>("");
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

  const onClickSignInButton = () =>
    userSignIn({
      email: userInputEmail,
      password: userInputPassWord,
    }).then((result) => {
      if (result.status === 200) navigate("/todo");
    });

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
          type="password"
          data-testid="password-input"
          onChange={(event) => {
            setUserInputPassWord(event.target.value);
          }}
        />
      </div>
      <div>
        <button
          data-testid="signin-button"
          disabled={isButtonEnabled}
          onClick={onClickSignInButton}
        >
          로그인
        </button>
        <p>
          새로운 회원이신가요? <Link to="/signup">회원가입하기</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
