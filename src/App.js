import React, {Component} from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  return (
    <div>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
