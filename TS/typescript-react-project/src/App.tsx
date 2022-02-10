import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todos";

function App() {
  const removeFromTodo = (todoId: string) => {
    setTodos((ex) => {
      return ex.filter((todo) => todo.id !== todoId);
    });
  };
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [new Todo("list item 11"), new Todo("list item 22")];
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((ex) => {
      return ex.concat(newTodo);
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos onRemoveTodo={removeFromTodo} items={todos} />
    </div>
  );
}

export default App;
