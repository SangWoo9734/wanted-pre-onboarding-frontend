import { userSignIn } from "api/user";
import { getStroageData, setStorageData } from "module/storage";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as G from "components/GlobalStyle";
import * as S from "./style";

const SignIn = () => {
  const navigate = useNavigate();
  const [userInputEmail, setUserInputEmail] = useState<string>("");
  const [userInputPassWord, setUserInputPassWord] = useState<string>("");
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(true);

  useEffect(() => {
    let token = getStroageData("auth_token");
    if (token !== null && token !== undefined) navigate("/todo");
  }, []);

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
      if (result.status === 200) {
        setStorageData("auth_token", result.data.access_token);
        navigate("/todo");
      }
    });

  return (
    <G.PageContainer>
      <S.SignInWrapper>
        <G.PageTitle>Sign - In</G.PageTitle>
        <G.DefaultInput
          placeholder="이메일"
          data-testid="email-input"
          onChange={(event) => {
            setUserInputEmail(event.target.value);
          }}
        />
        <G.DefaultInput
          type="password"
          placeholder="비밀번호"
          data-testid="password-input"
          onChange={(event) => {
            setUserInputPassWord(event.target.value);
          }}
        />
        <G.DefaultButton
          isFlexible={true}
          disabled={isButtonEnabled}
          onClick={onClickSignInButton}
          data-testid="signin-button"
        >
          로그인
        </G.DefaultButton>
        <S.SignUpText>
          새로운 회원이신가요?<Link to="/signup">회원가입하기</Link>
        </S.SignUpText>
      </S.SignInWrapper>
    </G.PageContainer>
  );
};

export default SignIn;
