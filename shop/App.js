/*eslint-disable*/
import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import Data from './data.js'; 
import Detail from './Detail.js'
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

function App() {

  let [shoes, setShoes] = useState(Data);
  //신발 데이터
  let [click, setClick] = useState(0);
  let [state, setState]= useState(true);
  return (
    <div className="App">
      <Navbar expand="lg" bg="light">
            <Navbar.Brand href="#home">My Shoes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to=".">Home</Nav.Link>
                <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
      </Navbar>

  <Switch>    
      <Route exact path="/">
      {/* exact가 붙으면 정확히 / 만 있을 때만 이걸 보여줌.  */}
          <Jumbotron className="background">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button className="logo-btn" variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <div className="container">
            <div className="row">
              {
                shoes.map(function(shoesData, count) {
                  return(
                    <Sales shoes={shoes[count]} count={count} key={count}></Sales>
                  );
                })
              }
            </div>
            {
              state == false
              ? <Load></Load>
              : null
            }
            <button className="btn btn-primary" onClick={
              ()=> {

                setState(false);
                // onclick 하자마자 로딩 중 이라는 ui 띄움


                // axios.post('서버 url', {id : 'abc', pw : 1234} <= 처럼 {}열고 전달할 데이터 입력) 예제 코드 찾으면 header정보 추가, 쿠키 설정 등 가능

                // fetch("서버 url").then() 사용 가능. 하지만 호환성이 안좋아서 library 사용함.
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then(//ajax 요청이 성공했을 때 실행할 코드
                  (result)=>{
                    //로딩중 ui 안보이게
                    setState(true);
                    // 가져온 값을 쓰고 싶을 땐 함수에 인자를 적어 인자를 사용하면 됨.
                    console.log(result.data);
                    setShoes([...shoes, ...result.data]);
                    //[...shoes, ...result.data] 라고 작성하면 shoes와 result.data를 감싼 []를 없애고 두 배열을 합쳐서 다시 []로 감싸줌. 
                    setClick(click + 1);
                    console.log(click);
                    //click 횟수에 따라 get으로 받아오는 data2 의 숫자 변경, 등으로 기능 개발
                  })
                .catch(//ajax 요청이 실패했을 때 실행
                ()=> {
                  //로딩중 ui 안보이게
                  setState(true);
                  console.log('req fail')}
                )
            }
          }>더보기</button>
          </div>
      </Route>
      <Route path="/detail/:id">
         <Detail shoes={shoes} />
      </Route>
      {/* 이렇게 컴포넌트 형식으로 만들어 정리하는 것을 모듈화라고 함. */}
      {/* <Route path="경로" component={컴포넌트 이름}></Route> */}
  </Switch>    
    </div>
  );
}

function Sales(props) {
  return (
    <div className="col-md-4">
    <img alt="사진" src={'https://codingapple1.github.io/shop/shoes'+(props.count +1)+'.jpg'} width="100%"/>
    <h4>상품 명 : { props.shoes.title } </h4>
    <p>{ props.shoes.content } & {props.shoes.price}</p>
  </div>
  )
} 

function Load() {
  return (
    <div className="loading">
      <p>로딩 중 입니다.</p>
    </div>
  )
}

export default App;
