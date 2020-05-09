import React, { useState } from "react";
import todo from "./@types/todo";
import TodoTitle from "./components";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

const addTodo = (content:string):void => {
  const newTodo: Todo = (
    id.todos.length,
    content : content,
    isChecked: false;
  );
  setTodos([...todos, newTodo]); // 전개 용법
};

  const removeTodo = (id:number) => {
    const newTodos: Todo[] = todos.filter((todo) => todo.id!==id);
    setTodos(newTodos);
  }
  const checkTodo = (id:number) => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (todo.id === id) {
        todo.isChecked = !todo.isChecked
      }
    });
    setTodos(newTodos);
  }
  return <div className="App">Hello React!</div>;
}

export default App;
