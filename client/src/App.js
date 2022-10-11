import React, {Fragment} from 'react';
import './App.css';

//components

import InputTodo from './components/inputTodo';
import ListTodos from './components/listTodos';

function App() {
  return(
  <Fragment>
    <InputTodo />
    <ListTodos />
  </Fragment>
  );
}

export default App;
