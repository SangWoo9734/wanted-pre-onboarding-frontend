import React from "react";
import TodoUnit from "../../components/todo_unit/TodoUnit";

const Todo = () => {
  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input />
        <button>추가</button>
      </div>
      <TodoUnit todoTitle="todo example" />
    </div>
  );
};

export default Todo;
