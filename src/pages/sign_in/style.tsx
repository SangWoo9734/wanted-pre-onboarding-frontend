import styled from "styled-components";

export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 70%;

  & > input {
    margin-bottom: 15px;
  }
`;

export const SignUpText = styled.p`
  margin-top: 10px;
  font-size: 1.1rem;

  & > * {
    margin-left: 5px;
    color: #41ce91;

    &:hover {
      text-decoration: underline;
    }
  }
`;
