/*eslint-disable*/
import profileImg from './undraw_profile.svg';
import React from 'react';
import styled from 'styled-components'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='body'> 
      {/*  Total Container Start */}

      <div className='container'>

        {/* Sidebar start */}
        <aside>
          <div className='top'>
            <div className='close' id='close-btn'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                  </path>
                </svg>
              </span>
            </div>
          </div>

          <div className="sidebar">
            <a href="#">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                >
                  <path
                    d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z">
                  </path>
                </svg>
              </span>
              <h3>Dashboard</h3>
            </a>
            <a href="#" className="active">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8 0-1.168.258-2.275.709-3.276.154.09.308.182.456.276.396.25.791.5 1.286.688.494.187 1.088.312 1.879.312.792 0 1.386-.125 1.881-.313s.891-.437 1.287-.687.792-.5 1.287-.688c.494-.187 1.088-.312 1.88-.312s1.386.125 1.88.313c.495.187.891.437 1.287.687s.792.5 1.287.688c.178.067.374.122.581.171.191.682.3 1.398.3 2.141 0 4.411-3.589 8-8 8z">
                  </path>
                  <circle cx="8.5" cy="12.5" r="1.5"></circle>
                  <circle cx="15.5" cy="12.5" r="1.5"></circle>
                </svg>
              </span>
              <h3>Customers</h3>
            </a>
            <a href="#">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                >
                  <path
                    d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-2 9h-2v-4h2v4zM5 7a1.001 1.001 0 0 1 0-2h13v2H5z">
                  </path>
                </svg>
              </span>
              <h3>Orders</h3>
            </a>
            <a href="#">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                >
                  <path
                    d="M13 2.051V11h8.949c-.47-4.717-4.232-8.479-8.949-8.949zm4.969 17.953c2.189-1.637 3.694-4.14 3.98-7.004h-8.183l4.203 7.004z">
                  </path>
                  <path
                    d="M11 12V2.051C5.954 2.555 2 6.824 2 12c0 5.514 4.486 10 10 10a9.93 9.93 0 0 0 4.255-.964s-5.253-8.915-5.254-9.031A.02.02 0 0 0 11 12z">
                  </path>
                </svg>
              </span>
              <h3>Analytics</h3>
            </a>
            <a href="#">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                >
                  <path
                    d="M4 18h2v4.081L11.101 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2z">
                  </path>
                  <path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path>
                </svg>
              </span>
              <h3>Messages</h3>
              <span className="message-count">22</span>
            </a>
            <a href="#">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                >
                  <path
                    d="m20 8-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9 19H7v-9h2v9zm4 0h-2v-6h2v6zm4 0h-2v-3h2v3zM14 9h-1V4l5 5h-4z">
                  </path>
                </svg>
              </span>
              <h3>Reports</h3>
            </a>
            <a href="#">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z">
                </path>
              </svg>
              </span>
              <h3>Settings</h3>
            </a>
            <a href="#">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                >
                  <path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path>
                  <path
                    d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z">
                  </path>
                </svg>
              </span>
              <h3>Logout</h3>
            </a>
          </div>
        </aside>
        {/* Sidebar end */}

        {/* Main Content start */}
        <main>
            <h1>Dashboard</h1>

            <div className="date">
                <input type="date" />
            </div>

            <div className="insight">


                <div className="sales">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M22,3.41l-.12-1.26-1.2.4a13.84,13.84,0,0,1-6.41.64,11.87,11.87,0,0,0-6.68.9A7.23,7.23,0,0,0,3.3,9.5a9,9,0,0,0,.39,4.58,16.6,16.6,0,0,1,1.18-2.2A9.85,9.85,0,0,1,8.94,8.45a11.16,11.16,0,0,1,5.06-1v0A12.08,12.08,0,0,0,9.34,9.2a9.48,9.48,0,0,0-1.86,1.53,11.38,11.38,0,0,0-1.39,1.91,16.39,16.39,0,0,0-1.57,4.54A26.42,26.42,0,0,0,4,22H6a30.69,30.69,0,0,1,.59-4.32,9.25,9.25,0,0,0,4.52,1.11,11,11,0,0,0,4.28-.87C23,14.67,22,3.86,22,3.41Z"></path></svg>
                    </span>
                    <div className="middle">
                        <div className="left">
                            <h3>Test</h3>
                            <h1>38878</h1>
                        </div>
                    </div>
                    <div className="progress">
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div className="number">
                            <p>95%</p>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
                </div>

                <div className="expenses">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M22,3.41l-.12-1.26-1.2.4a13.84,13.84,0,0,1-6.41.64,11.87,11.87,0,0,0-6.68.9A7.23,7.23,0,0,0,3.3,9.5a9,9,0,0,0,.39,4.58,16.6,16.6,0,0,1,1.18-2.2A9.85,9.85,0,0,1,8.94,8.45a11.16,11.16,0,0,1,5.06-1v0A12.08,12.08,0,0,0,9.34,9.2a9.48,9.48,0,0,0-1.86,1.53,11.38,11.38,0,0,0-1.39,1.91,16.39,16.39,0,0,0-1.57,4.54A26.42,26.42,0,0,0,4,22H6a30.69,30.69,0,0,1,.59-4.32,9.25,9.25,0,0,0,4.52,1.11,11,11,0,0,0,4.28-.87C23,14.67,22,3.86,22,3.41Z"></path></svg>
                    </span>
                    <div className="middle">
                        <div className="left">
                            <h3>Test</h3>
                            <h1>88455</h1>
                        </div>
                    </div>
                    <div className="progress">
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div className="number">
                            <p>52%</p>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
                </div>

                <div className="expenses">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" ><path d="M19.5 3A2.502 2.502 0 0 0 17 5.5c0 .357.078.696.214 1.005l-1.955 2.199A3.977 3.977 0 0 0 13 8c-.74 0-1.424.216-2.019.566L8.707 6.293l-.023.023C8.88 5.918 9 5.475 9 5a3 3 0 1 0-3 3c.475 0 .917-.12 1.316-.316l-.023.023L9.567 9.98A3.956 3.956 0 0 0 9 12c0 .997.38 1.899.985 2.601l-2.577 2.576A2.472 2.472 0 0 0 6.5 17C5.122 17 4 18.121 4 19.5S5.122 22 6.5 22 9 20.879 9 19.5c0-.321-.066-.626-.177-.909l2.838-2.838c.421.15.867.247 1.339.247 2.206 0 4-1.794 4-4 0-.636-.163-1.229-.428-1.764l2.117-2.383c.256.088.526.147.811.147C20.879 8 22 6.879 22 5.5S20.879 3 19.5 3zM13 14c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></svg>
                    </span>
                    <div className="middle">
                        <div className="left">
                            <h3>Test</h3>
                            <h1>88455</h1>
                        </div>
                    </div>
                    <div className="progress">
                        <svg >
                            <circle cx="38" cy="38" r="36" ></circle>
                        </svg>
                        <div className="number">
                            <p>52%</p>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
                </div>

                
            </div>

            <div className="recent-orders">
                <h2>Recent</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Produnt</th>
                            <th>Number</th>
                            <th>Status</th>
                            <th>Status</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Foldable Drone</td>
                            <td>1234</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Hvac</td>
                            <td>5445</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Multi v</td>
                            <td>245</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Ventilation</td>
                            <td>777</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </main>
        {/* Main Content end */}


        <div className='right'>
          <div className='top'>
            <button id='menu-btn'>
              <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                  </svg>
                </span>
            </button>
            <div className="theme-toggler">
                    <span className="active">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path></svg>
                    </span>
            </div>
            <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Daniel</b></p>
                        <small className="text-muted">Admin</small>
                    </div>
                    <div className="profile-photo">
                      <span>
                        <img src={profileImg}></img>
                      </span>
                    </div>
                </div>
          </div>
        </div>


      </div>

      {/*  Total Container end */}
    </div>

    </div>
  );
}

export default App;
