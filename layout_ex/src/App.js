/*eslint-disable*/

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

// Import Component
import Aside from './Comp/sidebar';
import Insight from './Comp/insight';
import DataTable from './Comp/dataTable';
import Top from './Comp/Top';
import RightDown from './Comp/rightDown';

import './App.css';



function App() {

  return (
    <div className="App">
      
      <div className='body'>
      <div className='container'>
        {/* sidebar Component */}
        <Aside />
        
        <main>
            <Route exact path='/'>
              <h1>Home</h1>
            </Route>

            <Route exact path='/dashboard'>
              <h1>Dashboard</h1>
              <div className="date">
                  <input type="date" />
              </div>
              <Insight />
              <DataTable />
            </Route>
            
            <Route exact path='/user'>
              <h1>User</h1>
              <div className='user'>
                <div>
                  <h2>Name</h2>
                  <h2>Detail</h2>
                </div>
                <div>
                  <h2>Name</h2>
                  <h2>Detail</h2>
                </div>
                <div>
                  <h2>Name</h2>
                  <h2>Detail</h2>
                </div>
              </div>
              
            </Route>

            <Route exact path='/streaming'>
              <h1>Streaming</h1>
              <div className='streaming'>
                <div>
                  <h2>Test Point : -- facilities</h2>
                  <div className='streamingItem'>
                    
                  </div>
                </div>
              </div>
            </Route>

            <Route exact path='/analytics'>
              <h1>Analytics</h1>
            </Route>

            <Route exact path='/messages'>
              <h1>Messages</h1>
            </Route>

            <Route exact path='/reports'>
              <h1>Reports</h1>
            </Route>

            <Route exact path='/settings'>
              <h1>Settings</h1>
            </Route>
          
        </main>
        
        <div className='right'>
          <Route exact path=''>
            <Top />
          </Route>
          <Route exact path='/dashboard'>
            <RightDown />
          </Route>
        </div>

      </div>
      </div>
    </div>

    
  );
}


export default App;
