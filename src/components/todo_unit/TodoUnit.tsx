import React from "react";
import * as S from "./style";

interface Props {
  todoTitle: string;
}

const TodoUnit = ({ todoTitle }: Props) => {
  return (
    <S.Todoli>
      <label>
        <input type="checkbox" />
        <span>{todoTitle}</span>
        <button>수정</button>
        <button>삭제</button>
      </label>
    </S.Todoli>
  );
};

export default TodoUnit;
