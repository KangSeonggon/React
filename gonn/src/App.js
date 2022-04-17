/*eslint-disable*/
import logo from './logo.svg';
import test from './7298265.png'
import { AiOutlineMenu, AiOutlineClose, AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import './App.css';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <body>
        <nav>
          <div className='container'>
            <Link to='/'><h2>Gonn</h2></Link>
            {/* <svg width="8rem" height="8rem" version="1.1" id="Layer_1" viewBox="0 0 199 67">
              <g transform="translate(0.000000,157.000000) scale(0.100000,-0.100000)">
                <path d="M277,1512c-34-14-104-92-130-145c-94-187-68-357,60-401c122-42,211,1,275,133c21,43,21,44,3,78c-11,19-27,39-37,44
		c-26,14-178-9-185-27c-8-22,24-63,58-71l30-8l-30-43c-52-71-91-53-91,43c0,99,61,246,117,282c31,20,43,6,43-50c0-49,44-97,88-97
		c37,0,42,12,42,98c0,83-14,110-68,140C407,1513,310,1526,277,1512z"/>
                <path d="M705,1505c-22-8-41-15-43-15c-1,0-22-28-47-61c-60-82-89-175-83-272c7-129,55-184,167-194c75-7,102,0,144,37
		c68,59,127,245,112,350c-11,76-32,107-89,134C798,1517,754,1523,705,1505z M820,1315c0-123-63-275-114-275c-80,0-25,291,67,355
		c20,14,23,14,34-2C814,1384,820,1349,820,1315z"/>
                <path d="M1025,1498c-17-50-65-393-65-466c0-40,3-44,35-58c69-29,71-27,95,109c12,67,24,129,27,137s15-20,28-62
		c32-104,60-164,82-176c32-17,90-25,98-13c3,6,29,100,57,209c81,317,75,281,47,303c-35,27-89,36-104,16c-6-9-24-71-39-139
		s-30-134-33-148c-4-17-14,17-33,108c-14,73-33,139-41,146c-16,16-101,46-130,46C1038,1510,1027,1504,1025,1498z"/>
                <path d="M1471,1487c-11-30-47-253-61-381c-7-71-7-102,1-112c13-16,75-37,91-32c7,3,24,63,38,139l26,134l23-75
		c43-141,58-167,106-186c75-28,72-34,138,221c32,127,60,239,61,249c1,25-57,66-95,66c-33,0-36-9-78-196c-16-71-30-127-30-124
		c-10,61-52,263-56,270c-7,12-111,50-136,50C1488,1510,1476,1500,1471,1487z"/>
              </g>
            </svg> */}

            <ul>
              
              <li><Link to='/' className='active'>HOME</Link></li>
              <li><Link to='/'>NEWS</Link></li>
              <li><Link to='/'>SKILLS</Link></li>
              <li><Link to='/'>SERVICES</Link></li>
              <li><Link to='/'>PORTFOLIO</Link></li>
              <li><Link to='/'>CONTACT</Link></li>
            </ul>
            
            <button><AiOutlineMenu /></button>
            <button><AiOutlineClose /></button>
            
          </div>
        </nav>
        
        <section className='landing'>
          <div className='container'>
            <div className='socials'>
              <a href='#'><AiFillGithub /></a>
              <a href='#'><AiFillFacebook /></a>
              <a href='#'><AiFillLinkedin /></a>
              
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
              <form>
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
