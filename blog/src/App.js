import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, changeTitle] = useState(['blog 만들었어요.','취미 생활','블록체인이란', '공부 중!']); //useState('abc')라고 작성하면  [abc, abc를 수정할 함수] 2가지가 배열로 남는다.
  //es6 신문법 배열이나 오브젝트에 있던 자료를 변수에 쉽게 담고 싶을 때 사용한다.
  let [date, changeDate] = useState(['2월 20일', '2월 21일', '2월 22일', '2월 23일']);
  let [like, changeLike] = useState(0);// changeLike는 like를 변경시키는 함수 changeLike(like를 어떻게 변경시킬지 작성) 
  //useState에 배열을 집어넣어 글 마다 좋아요 카운트를 다르게 해주어야 글 마다 좋아요가 다르게 올라감.
  let [modal, changeModal] = useState(false);
  let [num, changeNum] = useState(0);
  function newTitle() {
    var newArray = [...title];
    newArray = ['취미생활', '블록체인이란', 'blog 새로 만들었어요.', 'React 공부 시작했어요.'];
    newArray[0] = '바보';
    // state를 변경할 때 변경할 배열을 변수로 선언한 뒤, 선언한 변수를 수정해야 값을 변경할 수 있음.
    // [...변경할 state배열 이름] react에서는 이렇게 ...을 넣어서 변수 선언을 해야 state값을 변경할 수 있음. 
    changeTitle( newArray );
  };
  
  function ui() {
    var array = [];
    for (var i = 0; i < 3; i++) {
      array.push(      <div className="list">
                       <h3>글 제목 : {title[0]} <span style={ {cursor : 'pointer'} } onClick={ ()=> {changeLike( like+1 )} }>👍</span> {like} </h3>
                       <p>날짜 : {date[0]}</p>
      {/* 함수 이름을 넣을 때는 소괄호 넣지 않음 */}
      <hr />
    </div>);
    }
    return array;
    //react에서 for 반복문 사용하는 방법 
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ {fontSize : '24px'} }>React blog</div>
      </div>
      <h2> React를 이용한 blog 만들기 </h2>
        {
          title.map( (titleList, i)=> {
            return (
            <div className="list">
              <h3 onClick={ ()=> {changeNum(i)} } style={ {cursor : 'pointer'} }>글 제목 : {titleList} </h3>
              <p>날짜 : {date[i]}</p>
              <hr />
            </div>
            );
          })
        }
      {/* 반복문 안에서 다른 배열의 반복문 어떻게 하는지 알아보기 */}
      {/* { ui() }  for 반복문을 이용한 ui*/}
      <button onClick={ ()=> { changeModal(!modal) } }>모달 버튼</button>
      {/* component 문법 html을 한 단어로 줄여서 쓸 수 있음. */}
      {/* component 관습 : 이름은 대문자로, return()안에 있는 건 하나의 태그로 묶여야 함. */}
      {/* <button onClick={ ()=> {changePushNum(0)} }>버튼1</button>
      <button onClick={ ()=> {changePushNum(1)} }>버튼2</button>
      <button onClick={ ()=> {changePushNum(2)} }>버튼3</button> 
      onClick 이벤트를 이용한 state 값 변경.
      */}
       
      { 
      modal === true
      ? <Modal title={title} num={num} date={date}></Modal>
        // <Modal 작명 = {전송할 state}></Modal> => props 문법
      : null  
      }
    </div>
  );
}

function Modal(props) {
  return (
  <div className="modal">
    <h2> {props.title[props.num]} </h2>
    <p>날짜 : {props.date[props.num]} </p>
    <p>상세 내용 :</p>
  </div>
  )
}
export default App;
