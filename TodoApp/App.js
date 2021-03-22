import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './component/TodoTemplate';
import TodoHead from './component/TodoHead';
import TodoList from './component/TodoList';
import TodoCreate from './component/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle `
body {
  background : #e9ecef;
}
`;

function App() {

  return (
    <div className="App">
      <TodoProvider>
        <GlobalStyle />
          <TodoTemplate>
            <TodoHead />
            <TodoList />
            <TodoCreate />
          </TodoTemplate>
        </TodoProvider>
    </div>
  );
}

export default App;
