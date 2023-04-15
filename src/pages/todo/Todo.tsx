import React, { useEffect, useState } from "react";
import { createTodo, getTodo } from "api/todo";
import { TodoType } from "assets/types";
import TodoUnit from "components/todo_unit/TodoUnit";
import { getStroageData } from "module/storage";
import { useNavigate } from "react-router-dom";

import * as G from "components/GlobalStyle";
import * as S from "./style";

const Todo = () => {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState<Array<TodoType>>([]);
  const [newTodoText, setNewTodoText] = useState<string>("");

  const fetchTodoListData = () => {
    let token = getStroageData("auth_token");
    if (token == null) navigate("/signin");
    getTodo().then((result) => {
      if (result.status === 200 && result.data !== null) {
        setTodoList(result.data);
      }
      return [];
    });
  };

  const onClickAddTodoButton = () => {
    createTodo(newTodoText).then(() => {
      setNewTodoText("");
      fetchTodoListData();
    });
  };

  useEffect(() => {
    fetchTodoListData();
  }, []);

  return (
    <G.PageContainer>
      <G.PageTitle>To - Do</G.PageTitle>
      <S.TodoCreatorContainer>
        <G.DefaultInput
          value={newTodoText}
          placeholder="To-Do를 추가해보세요!"
          onChange={(event) => setNewTodoText(event.target.value)}
          data-testid="new-todo-input"
        />
        <G.DefaultButton
          onClick={onClickAddTodoButton}
          data-testid="new-todo-add-button"
        >
          추가
        </G.DefaultButton>
      </S.TodoCreatorContainer>
      {todoList.length === 0 ? (
        <S.NoTodoNotice>
          <p>등록된 Todo가 없습니다.</p>
        </S.NoTodoNotice>
      ) : (
        <S.TodoListContainer>
          {todoList.map((todoData: TodoType) => {
            return (
              <TodoUnit
                key={todoData.id}
                todoProps={todoData}
                fetchTodoListData={fetchTodoListData}
              />
            );
          })}
        </S.TodoListContainer>
      )}
    </G.PageContainer>
  );
};

export default Todo;
