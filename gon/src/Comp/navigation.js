/*eslint-disable*/
import { Route, Link, Switch, Routes } from 'react-router-dom';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


function Nav() {
    let [menu, c_menu] = useState('home');

    useEffect(()=>{
      if (matchMedia("screen and (max-width:1050px)").matches) {
        document.querySelector('nav .container ul').style.display = 'none';
        document.querySelector('#menu-btn').style.display = 'inline-block';
        document.querySelector('#close-btn').style.display = 'none';
      } else {
        null
      }
      
    },[menu])


  
    return(
        <nav>
          <div className='container'>
            <Link to='/'>
              <h2>GONN</h2>
            </Link>
            <ul>
              <li><Link id='home' to='/'  onClick={()=> {c_menu('home')}} >HOME</Link></li>
              <li><Link id='dashboard' to='/dashboard/food' onClick={()=> {c_menu('restaurant')}} >RESTAURANT</Link></li>
              {/* <li><Link id='project' to='/archive' onClick={()=> {c_menu('archive')}} >ARCHIVE</Link></li> */}
              <li><Link id='resume' to='/resume' onClick={()=> {c_menu('resume')}} >RESUME</Link></li>
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