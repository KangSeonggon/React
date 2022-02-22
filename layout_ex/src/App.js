/*eslint-disable*/

import React, { createContext, useContext, useEffect, useState } from 'react';

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

         
        {/* Sidebar Component */}
        <Aside />

        <main>
            <h1>Dashboard</h1>
            <div className="date">
                <input type="date" />
            </div>

            {/* Insight Component */}
            <Insight />

            {/* DataTable Component */}
            <DataTable />

        </main>
        
        <div className='right'>
          {/* Top Component */}
          <Top />

          {/* RightDown Component */}
          <RightDown />
          
        </div>

      </div>
      </div>
    </div>

    
  );
}

export default App;
