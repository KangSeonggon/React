import { Route, Link, Switch, Routes } from 'react-router-dom';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Nav() {
    let [menu, c_menu] = useState('');
  
    return(
        <nav>
          <div className='container'>
            <Link to='/'>
              <h2>GONN</h2>
            </Link>
            <ul>
              <li><Link id='home' to='/'  onClick={()=> {c_menu('home')}} >HOME</Link></li>
              <li><Link id='news' to='/dashboard' onClick={()=> {c_menu('dashboard')}} >DASHBOARD</Link></li>
              <li><Link id='skills' to='/skills' onClick={()=> {c_menu('skills')}} >SKILLS</Link></li>
              <li><Link id='services' to='/services' onClick={()=> {c_menu('services')}}  >SERVICES</Link></li>
              <li><Link id='portfolio' to='/portfolio' onClick={()=> {c_menu('portfolio')}} >PORTFOLIO</Link></li>
              <li><Link id='contact' to='/contact' onClick={()=> {c_menu('contact')}} >CONTACT</Link></li>
            </ul>
            
            <button id='menu-btn' onClick={ ()=> {
              document.querySelector('nav .container ul').style.display = 'block';
              document.querySelector('#menu-btn').style.display = 'none';
              document.querySelector('#close-btn').style.display = 'inline-block';
            }}><AiOutlineMenu /></button>
            <button id='close-btn' onClick={ ()=> {
              document.querySelector('nav .container ul').style.display = 'none';
              document.querySelector('#menu-btn').style.display = 'inline-block';
              document.querySelector('#close-btn').style.display = 'none';
            }}><AiOutlineClose /></button>
            
          </div>
        </nav>
       
    )
}

export default Nav;