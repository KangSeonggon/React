import logo from './logo.svg';
import './App.css';
import {Navbar,Nav,NavDropdown,Button,Container } from 'react-bootstrap';

import {Link, Route, Switch} from 'react-router-dom';

import Detail from "./detail";

function App() {
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
      <Switch>
      <Route exact path="/">
        <div className='jumbo'>
          <h1>GON TEST</h1>
        </div>
        <div className='container'>
        <div className='row'>
          <div className='col-md-4'>1</div>
          <div className='col-md-4'>2</div>
          <div className='col-md-4'>3</div>
        </div>
      </div>
      </Route>
      <Route exact path="/detail">
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
      </Switch>
      
    </div>
  );
}

function Card() {
  return(
    <div className='col-md-4'>
      detail-routing
    </div>
  )
}



export default App;
