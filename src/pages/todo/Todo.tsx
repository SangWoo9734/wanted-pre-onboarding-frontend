import React, { useEffect, useState } from "react";
import { createTodo, getTodo } from "api/todo";
import { TodoType } from "assets/types";
import TodoUnit from "components/todo_unit/TodoUnit";
import { getStroageData } from "module/storage";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>Todo</h1>
      <div>
        <input
          value={newTodoText}
          onChange={(event) => setNewTodoText(event.target.value)}
          data-testid="new-todo-input"
        />
        <button
          onClick={onClickAddTodoButton}
          data-testid="new-todo-add-button"
        >
          추가
        </button>
      </div>
      {todoList.length === 0 ? (
        <p>등록된 Todo가 없습니다.</p>
      ) : (
        <ul>
          {todoList.map((todoData: TodoType) => {
            return (
              <TodoUnit
                key={todoData.id}
                todoProps={todoData}
                fetchTodoListData={fetchTodoListData}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Todo;
