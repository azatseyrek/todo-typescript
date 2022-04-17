import React, {useState} from 'react';
import InputField from './components/InputField';
import {Todo} from './components/types';
import './App.css';
import {getValue} from '@testing-library/user-event/dist/utils';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    todo
      ? setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
      : setTodo('');
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
};

export default App;
