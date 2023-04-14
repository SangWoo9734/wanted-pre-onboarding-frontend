import { userSignUp } from "api/user";
import { getStroageData } from "module/storage";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as G from "components/GlobalStyle";
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
    <G.PageContainer>
      <S.SignUpWrapper>
        <G.PageTitle>Sign - Up</G.PageTitle>
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
          onClick={onClickSignUpButton}
          data-testid="signup-button"
        >
          회원가입
        </G.DefaultButton>
        <S.SignUpNoticeWrapper>
          <p>{noticMesssage}</p>
        </S.SignUpNoticeWrapper>
      </S.SignUpWrapper>
    </G.PageContainer>
  );
};

export default SignUp;
