import { deleteTodo, updateTodo } from "api/todo";
import { TodoType } from "assets/types";
import React, { useState } from "react";

import * as G from "components/GlobalStyle";
import * as S from "./style";

interface Props {
  fetchTodoListData: Function;
  todoProps: TodoType;
}

const TodoUnit = ({ fetchTodoListData, todoProps }: Props) => {
  const [todoData, setTodoData] = useState<TodoType>(todoProps);
  const [isEditingMode, setIsEditingMode] = useState<boolean>(false);

  const onEditTodoText = (event: React.ChangeEvent<HTMLInputElement>) => {
    todoData.todo = event.target.value;
    setTodoData(todoData);
  };

  const onClickTodoEditToggle = () => setIsEditingMode(!isEditingMode);

  const onClickTodoCompleteToggle = () => {
    todoData.isCompleted = !todoData.isCompleted;
    setTodoData(todoData);
    updateTodo(todoData);
  };

  const onClickTodoUpdateButton = () => {
    updateTodo(todoData);
    setIsEditingMode(false);
  };

  const onClickTodoDeleteButton = () =>
    deleteTodo(todoData).then(() => fetchTodoListData());

  return (
    <S.Todoli>
      <S.TodoCheckBox
        id={`input_${todoData.id}`}
        type="checkbox"
        defaultChecked={todoData.isCompleted}
        onClick={onClickTodoCompleteToggle}
      />
      {isEditingMode ? (
        <S.TodoInfoContainer>
          <G.DefaultInput
            autoFocus
            defaultValue={todoData.todo}
            onChange={onEditTodoText}
            data-testid="modify-input"
          />
          <G.DefaultButton
            onClick={onClickTodoUpdateButton}
            data-testid="submit-button"
          >
            제출
          </G.DefaultButton>
          <G.DefaultButton
            onClick={onClickTodoEditToggle}
            data-testid="cancel-button"
          >
            취소
          </G.DefaultButton>
        </S.TodoInfoContainer>
      ) : (
        <S.TodoInfoContainer>
          <S.TodoLabel htmlFor={`input_${todoData.id}`}>
            <S.TodoText>{todoData.todo}</S.TodoText>
          </S.TodoLabel>
          <G.DefaultButton
            onClick={onClickTodoEditToggle}
            data-testid="modify-button"
          >
            수정
          </G.DefaultButton>
          <G.DefaultButton
            onClick={onClickTodoDeleteButton}
            data-testid="delete-button"
          >
            삭제
          </G.DefaultButton>
        </S.TodoInfoContainer>
      )}
    </S.Todoli>
  );
};

export default TodoUnit;
