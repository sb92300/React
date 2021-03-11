import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { reducer, reducer2 } from './reduxFunc.js';

let store = createStore(combineReducers( {reducer, reducer2} ));
// redux react-redux 라이브러리 설치 후 index.js에 import, 그 후 <Provider>로 <App /> 감싸기
// state 생성 후 Provider에 넣어주면 Provider로 감싼 태그 안에서는 props 없이 state 사용 가능.
// 여러 개의 reducer를 만들때는 createStore(combineReducers({reducer함수, reducer함수2 ...})) 이런 식으로.

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
