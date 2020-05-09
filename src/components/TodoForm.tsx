import React from "react";

interface TodoFormProps {
  addTodo: (content: string) => void;
}

function TodoForm() {
  return (
    <div className="todo-form">
      <input
        type="text"
        className="todo-form-input"
        placeholder="할 일을 입력"
      />
      <button className="todo-from-btn"></button>
    </div>
  );
}

export default TodoFrom;
