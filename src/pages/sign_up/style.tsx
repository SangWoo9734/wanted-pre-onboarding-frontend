import styled from "styled-components";

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 70%;

  & > input {
    margin-bottom: 15px;
  }
`;

export const SignUpNoticeWrapper = styled.div`
  margin-top: 5px;
  color: red;
  font-size: 1.1rem;
`;
