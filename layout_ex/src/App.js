/*eslint-disable*/

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

// Import Component
import Aside from './Comp/sidebar';
import Insight from './Comp/insight';
import DataTable from './Comp/dataTable';
import Top from './Comp/Top';
import RightDown from './Comp/rightDown';
// import HomeVisual from './Comp/homeVisual';



import './App.css';
import FirstHome from './Comp/firstHome';


function App() {

  return (
    <div className="App">
      
      <div className='body'>
        <Switch>
        <Route exact path='/'>
          <FirstHome /></Route>
      <div className='container'>
        
        {/* sidebar Component */}
        <Aside />
        
        <main>

            
            
            <Route exact path='/'>
              
            </Route>
            <Route exact path='/dashboard'>
              <h1>Dashboard</h1>
              {/* <div className="date">
                  <input type="date" />
              </div> */}
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
                <div className='streamingItem'>
                  <h2>Test Site : Place 1</h2>
                  <Link to='/streaming/detail'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zM10 7l6 5-6 5V7z"></path>
                        </svg>
                  </Link>
                </div>
                <div className='streamingItem'>
                  <h2>Test Site : Place 2</h2>
                  <Link to='/streaming/detail'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zM10 7l6 5-6 5V7z"></path>
                        </svg>
                  </Link>
                </div>
                <div className='streamingItem'>
                  <h2>Test Site : Place 3</h2>
                  <Link to='/streaming/detail'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zM10 7l6 5-6 5V7z"></path>
                        </svg>
                  </Link>
                </div>

                {/* <div>
                  <h2>Test Point</h2>
                  <div className='streamingDetail'>
                    
                  </div>
                </div> */}
              </div>
            </Route>

            <Route path='/streaming/detail'>
              <div>
                  <h1>Test Point 1</h1>
                  <div className='streamingDetail'>
                    <h1 style={{textAlign:"center"}}>테스트입니다</h1>
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
      </Switch>
      </div>
    </div>

    
  );
}


export default App;
