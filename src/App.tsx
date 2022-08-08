import { useEffect, useState } from 'react';
import './App.css';
import { Box } from './components/box';
import TodoService, { Todo } from './services/todoService';

function App() {

  const [count, setCount] = useState(0);
  const todoService = new TodoService();
  const [todos, setTodos] = useState<Todo[]>([]);

  async function getTodos() {
    todoService.getAllTodos()
      .then(todos => setTodos(todos));
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      <Box count={count} onClick={() => {
        setCount((prevCount) => prevCount + 1);
      }} 
      />
      {
       todos.map((todo) => {
          return <div>{todo.id} </div>
        })
      }
    </div>
  );
}

export default App;
