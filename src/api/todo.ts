import { apiClient } from ".";
import { TodoType } from "assets/types";
import { getStroageData } from "module/storage";

const createTodo = (newTodoText: string) => {
  return apiClient.post(
    "/todos",
    {
      todo: newTodoText,
    },
    {
      headers: {
        Authorization: `Bearer ${getStroageData("auth_token")}`,
      },
    }
  );
};

const getTodo = () => {
  return apiClient.get<Array<TodoType>>("/todos", {
    headers: {
      Authorization: `Bearer ${getStroageData("auth_token")}`,
    },
  });
};

const updateTodo = ({ id, todo, isCompleted }: TodoType) => {
  return apiClient.put(
    `/todos/${id}`,
    {
      todo,
      isCompleted,
    },
    {
      headers: {
        Authorization: `Bearer ${getStroageData("auth_token")}`,
      },
    }
  );
};

const deleteTodo = ({ id }: TodoType) => {
  return apiClient.delete(`/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${getStroageData("auth_token")}`,
    },
  });
};

export { createTodo, getTodo, updateTodo, deleteTodo };
