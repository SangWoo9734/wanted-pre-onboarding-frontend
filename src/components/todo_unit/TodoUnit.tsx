import { deleteTodo, updateTodo } from "api/todo";
import { TodoType } from "assets/types";
import React, { useState } from "react";
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
      <label>
        <input
          type="checkbox"
          defaultChecked={todoData.isCompleted}
          onClick={onClickTodoCompleteToggle}
        />
        {isEditingMode ? (
          <span>
            <input
              defaultValue={todoData.todo}
              onChange={onEditTodoText}
              data-testid="modify-input"
            />
            <button
              onClick={onClickTodoUpdateButton}
              data-testid="submit-button"
            >
              제출
            </button>
            <button onClick={onClickTodoEditToggle} data-testid="cancel-button">
              취소
            </button>
          </span>
        ) : (
          <span>
            <span>{todoData.todo}</span>
            <button onClick={onClickTodoEditToggle} data-testid="modify-button">
              수정
            </button>
            <button
              onClick={onClickTodoDeleteButton}
              data-testid="delete-button"
            >
              삭제
            </button>
          </span>
        )}
      </label>
    </S.Todoli>
  );
};

export default TodoUnit;
