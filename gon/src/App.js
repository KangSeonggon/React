/*eslint-disable*/
import logo from './logo.svg';


import { AiOutlineMenu, AiOutlineClose, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import './App.css';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Route, Link, Switch, Routes } from 'react-router-dom';

import Contact from './Comp/contact';
import Kakaomap from './Comp/kakaomap';
import Home from './Comp/home';
import Nav from './Comp/navigation';
import Footer from './Comp/footer';
import Dashboard from './Comp/dashboard';
import Portfolio from './Comp/portfolio';
import Archive from './Comp/archive';


function App() {
  let [menu, c_menu] = useState('');
  

  return (
    <div className="App">
      <div className='body'>
      
        <Nav />
        
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
        
          <Route exact path={'/dashboard'}>
            <Dashboard />
          </Route>
          <Route exact path={'/dashboard/food'}>
            <Kakaomap />
          </Route>
        
        <Route exact path={'/contact'}>
          <Contact />
        </Route>

        <Route exact path={'/resume'}>
          <Portfolio />
        </Route>

        <Route exact path={'/archive'}>
          <Archive />
        </Route>
        
      </Switch>

      </div>

      <Footer />
        
    </div>
  );
}

export default App;
