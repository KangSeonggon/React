/*eslint-disable*/
import React from "react";
import { Route, Link, Switch, Routes } from 'react-router-dom';
import { BsFillMusicPlayerFill, BsNewspaper } from 'react-icons/bs';
import { MdFastfood } from 'react-icons/md';
import { ImNewspaper } from 'react-icons/im';
import { FaCat, FaHandMiddleFinger, FaNewspaper } from "react-icons/fa";



function Dashboard() {
    return(
        <section className="dashboard" id="dashboards">
            
            <div className='overlay'>
            <h1>Dashboard</h1>
            <p id="p">Lifestyle</p>
            <div className="container">
                
                <Link to='/dashboard/food'>
                <div className="dash">
                    <span><MdFastfood id="food" /></span>
                    <h3>Food</h3>
                    <p>다녀 온 맛집을 소개해요</p>
                    <p>지도와 짧은 리뷰</p>
                    <p>사진도 있음ㅋ</p>
                </div>
                </Link>
               
                <Link to='/dashboard/news'>
                <div className="dash">
                    <span><ImNewspaper id="food" /></span>
                    <h3>News</h3>
                    <p>etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
                </div>
                </Link>

                <Link to='/dashboard/music'>
                <div className="dash">
                    <span><BsFillMusicPlayerFill id='food' /></span>
                    <h3>Music</h3>
                    <p>etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute</p>
                </div>
                </Link>
                <Link to='/dashboard/test'>
                <div className="dash">
                    <span><FaCat id='food' /></span>
                    <h3>Test</h3>
                    <p>etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
                </div>
                </Link>
                <Link to='/dashboard/test'>
                <div className="dash">
                    <span><FaHandMiddleFinger id='food' /></span>
                    <h3>Test</h3>
                                        <p>etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
                </div>
                </Link>
                
            </div>
            </div>
        </section>
       
    )
}

export default Dashboard;