import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="bg-primary text-white">
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
