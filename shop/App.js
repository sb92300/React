import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" bg="light">
            <Navbar.Brand href="#home">My Shoes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
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
          <div className="col-md-4">
            <img alt="사진" src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
            <h4>상품 명 : </h4>
            <p>상품 설명 & 가격</p>
          </div>
          <div className="col-md-4">
          <img alt="사진" src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%"/>
            <h4>상품 명 : </h4>
            <p>상품 설명 & 가격</p>
          </div>
          <div className="col-md-4">
          <img alt="사진" src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%"/>
            <h4>상품 명 : </h4>
            <p>상품 설명 & 가격</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
