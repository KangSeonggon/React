/*eslint-disable*/ 
import './App.css';
import {Navbar,Nav,NavDropdown,Container } from 'react-bootstrap';
import React, { useState } from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Detail from "./detail";
import data from './data.js';

function App() {
  let [shoes ,c_shoes] = useState(data);


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React Exercise</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to="/">Home</Link></Nav.Link>
              <Nav.Link ><Link to="/detail">Detail</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
      <Route path="/">
        <div className='jumbo'>
          <h1>GON TEST</h1>
        </div>
        <div className='container'>
        <div className='row'>
          <Card shoes={shoes} />
        </div>
      </div>
      </Route>
      <Route path="/detail">
        <div className='jumbo'>
          <h1>GON TEST</h1>
        </div>
        <Detail></Detail>
      </Route>
      
       
      <Route path="/:id">
        <div>주소창에 아무거나 적었을때 이걸 보여줘, 지금은 SWith때문에 안보임
          Swith = 택 1해서 보여주세요
        </div>
      </Route> 
     
    </div>
  );
}

function Card(props) {
  let [imgurl,c_imgurl] = useState(["https://codingapple1.github.io/shop/shoes1.jpg","https://codingapple1.github.io/shop/shoes2.jpg","https://codingapple1.github.io/shop/shoes3.jpg"])
  return(
    props.shoes.map(function(a,i){
      return(
        <div className='col-md-4'>
          <img src={imgurl[i]} width="100%" key={i} />
          <h2> {a.title} </h2>
          <p> {a.content} / {a.price}</p>
        </div>
      )
    })
  )
}




export default App;
