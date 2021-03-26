
import './App.css';
import Template from './component/template';
import {createGlobalStyle} from "styled-components";
import Head from "./component/templateHead";
import TodoList from './component/templateList'
import TodoCreate from './component/templateCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`


function App() {
  return (
    <>
      <GlobalStyle />
      <Template>
        <Head />
        <TodoList />
        <TodoCreate />
      </Template>
    </>
  );
}

export default App;
