import styled from "styled-components";

export const Todoli = styled.li`
  display: flex;
  margin-bottom: 10px;
  padding: 15px 20px;
  border-radius: 5px;
  background: #00000010;
  list-style-type: none;
`;
export const TodoCheckBox = styled.input`
  margin-right: 10px;
`;

export const TodoLabel = styled.label`
  flex: auto;
`;

export const TodoText = styled.p`
  flex: auto;
  padding: 0 10px;
  font-size: 1.1rem;
  line-height: 1.5;
`;
export const TodoInfoContainer = styled.div`
  display: flex;
  flex: auto;
  align-items: center;
`;
