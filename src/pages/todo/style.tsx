import styled from "styled-components";

export const TodoListTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const TodoLogout = styled.button`
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: #41ce91;

  &:hover {
    text-decoration: underline;
  }
`;

export const TodoListContainer = styled.ul`
  padding: 20px 0;
`;

export const TodoCreatorContainer = styled.div`
  display: flex;
`;

export const NoTodoNotice = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  background: #00000010;
  font-size: 1.1rem;
  text-align: center;
`;
