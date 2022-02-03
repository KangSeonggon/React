/*eslint-disable*/ 
import './App.css';
import {Navbar,Nav,NavDropdown,Container, Button, Spinner } from 'react-bootstrap';
import React, { createContext, useEffect, useReducer, useState } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import axios from 'axios';

import Detail from "./detail";
import data from './data.js';

export let 재고context = React.createContext();

function App() {
  let [shoes ,c_shoes] = useState(data);
  let [load , c_load] = useState(false);
  let [remain, c_remain] = useState([10,11,12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React Exercise</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as = {Link} to="/">Home</Nav.Link>
              <Nav.Link as = {Link} to="/detail">Detail</Nav.Link>
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
     
      <Route exact path="/">
        <div className='jumbo'>
          <h1>GON TEST</h1>
        </div>
        <div className='container'>
        <div className='row'>
          {
            shoes.map((a,i) => {
              return <Card2 shoes = {shoes[i]} i={i} key={i} />
            })
          }
        </div>
        {/* html 을 추가할생각하지말고 card2 컴포넌트 shoes state에 데이터를 추가할 생각해라 */}
        <button className="btn btn-primary" onClick={()=>{
          c_load(true)
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result) => {
            c_shoes([...shoes, ...result.data])
            c_load(false)
          })
          .catch(() => { c_load(false) })
        }}>더보기</button>
        {
            load === true
            ? (<Loading/>)
            : null
        }
      </div>
      </Route>
      <Route exact path="/detail">
        <div className='jumbo'>
          <h1>GON TEST</h1>
        </div>
        <Detail shoes={shoes}></Detail>
      </Route>

      <Route path="/detail/:id">
        <Detail shoes={shoes}></Detail>
      </Route>
      
       
      {/* <Route path="/:id">
        <div>
          /:id  >>  주소창에 아무거나 적었을때 이걸 보여줘
          Swith >>  맨 위 route 택 1해서 보여주세요
        </div>
      </Route>  */}
     
    </div>
  );
}
// 내방법
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
// 강의방법
function Card2(props){
  return (
    <div className="col-md-4">
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg' } width="100%"/>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
      
    </div>
  )
}

function Loading() {
 return (
    <Button variant="primary" disabled>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button>
 )}
 




export default App;
