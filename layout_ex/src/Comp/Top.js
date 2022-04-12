import React from "react";
import profileImg from '../svg/undraw_profile.svg';

function Top() {
    return(
        <div className='top'>
            <button id='menu-btn' onClick={() => {
              document.querySelector("aside").style.display = 'block';
            }}>
              <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                  </svg>
                </span>
            </button>
            <div className="theme-toggler" onClick={() => {
              let themeToggler = document.querySelector(".theme-toggler");
              document.body.classList.toggle('dark-theme-variables');
              themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
              themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
            }}>
                    <span className="active">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path></svg>
                    </span>
            </div>
            <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Gonn</b></p>
                        <small className="text-muted">Admin</small>
                    </div>
                    <div className="profile-photo">
                      <span>
                        <img src={profileImg}></img>
                      </span>
                    </div>
                </div>
        </div>
    )
}

export default Top;