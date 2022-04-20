/*eslint-disable*/
import logo from './logo.svg';
import test from './7298265.png'
import { AiOutlineMenu, AiOutlineClose, AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import './App.css';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Route, Link, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <body>
        
        <Route path='/'>111</Route>
       
        <nav>
          <div className='container'>
            <Link to='/'>
              <h2>Gonn</h2>
            </Link>
            <ul>
              <li><Link to='/' className='active'>HOME</Link></li>
              <li><Link to='/news'>NEWS</Link></li>
              <li><Link to='/skills'>SKILLS</Link></li>
              <li><Link to='/services'>SERVICES</Link></li>
              <li><Link to='/portfolio'>PORTFOLIO</Link></li>
              <li><Link to='/contact'>CONTACT</Link></li>
            </ul>
            
            <button><AiOutlineMenu /></button>
            <button><AiOutlineClose /></button>
            
          </div>
        </nav>
        
        <section className='landing'>
          <div className='container'>
            <div className='socials'>
              <a href='https://github.com/KangSeonggon' target='_blank'><AiFillGithub /></a>
              <a href='https://www.linkedin.com/in/seonggon-kang-6a7b91237/' target='_blank'><AiFillLinkedin /></a>
              
            </div>

            <div className='info'>
              <h1>UI/UX Design & React Web Developer</h1>
              <h3>Hi, I'm Gonn</h3>
              <p>People who succeed have momentum. The more they succeed, the more they want to succeed and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.</p>
            </div>
            <div className='profile-area'>
              <div className='profile-box'></div>
              <div className='profile'><img src={test}></img></div>
            </div>
          </div>
        </section>

        
        <section className='contact' id='contact'>
          <div className='overlay'>
            <div className='container'>
              <h1>Contact</h1>
              <p>People who succeed have momentum. The more they succeed, the more they want to succeed and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.</p>
              <form action='https://formspree.io/f/xlezpzqa' method='POST'>
                <input type="text" name='Name' placeholder='Name' required></input>
                <input type="email" name='Email' placeholder='Email' required></input>
                <input type="text" name='Subject' placeholder='Subject' required></input>
                <textarea name='Message' placeholder='Message' required></textarea>
                <input type='submit' value="Submit" className="btn btn-primary"></input>
              </form>
            </div>
          </div>
        </section>
        

        
      </body>
        
    </div>
  );
}

export default App;
