/*eslint-disable*/
import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import Data from './data.js'; 
import Detail from './Detail.js'
import { Link, Route, Switch } from 'react-router-dom';


function App() {

  let [shoes, setShoes] = useState(Data);
  //신발 데이터

  return (
    <div className="App">
      <Navbar expand="lg" bg="light" className="yas">
            <Navbar.Brand href="#home">My Shoes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
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


export default App;
