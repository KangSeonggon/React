import React from "react";
import food from '../cooking.png'
import rocket from '../rocket.png'
import owl from '../owl.png'
import { Route, Link, Switch, Routes } from 'react-router-dom';


function Dashboard() {
    return(
        <section className="dashboard" id="dashboards">
            <h1>DASHBOARD</h1>
            <div className="container">
                <Link to='/dashboard/food'>
                <div className="dash">
                    <span><img id="food" src={food}></img></span>
                    <h3>Food</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                </Link>
               
                <Link to='/dashboard/news'>
                <div className="dash">
                    <span><img id="rocket" src={rocket}></img></span>
                    <h3>News</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                </Link>

                <Link to='/dashboard/test'>
                <div className="dash">
                    <span><img id="owl" src={owl}></img></span>
                    <h3>Test</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                </Link>
            </div>
        </section>
       
    )
}

export default Dashboard;