
import './App.css';
import Template from './component/template';
import {createGlobalStyle, withTheme} from "styled-components";
import Head from "./component/templateHead";
import TodoList from './component/templateList'
import TodoCreate from './component/templateCreate';
import Hello from './component/hello';
import Wrapper from './component/wrapper';
import Counter from './component/counter';
import InputSample from './component/inputSample';
import UserList from './component/arrayMap';
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`


function App() {
  const name = 'react 하는 중';
  const style = {
    background : 'black',
    color: 'white',
    fontSize : 24,
    padding: '1rem'
  }
  return (
    <>
      <GlobalStyle />
      <Template>
        <Head />
        <TodoList />
        <TodoCreate />
      </Template>
      <Wrapper>
        <Hello name={name} color='red' isSpecial /> 
        {/* props로 전달해 줄 값을 이름만 작성하면 true 와 같은 의미 isSpecial == ( isSpecial = {true} )*/}
        <Hello color="pink"/>
      </Wrapper>  
      <div style={style}> {name} </div>
      <Counter />
      <InputSample />
      <UserList />
    </>
  );
}

export default App;
