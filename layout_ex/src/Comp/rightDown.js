import React from "react";
import profileImg from '../svg/undraw_profile.svg';

function RightDown() {
    return(
        <div className='recent-updates'>
            <h2>Recent Messages</h2>
            <div className='updates'>

              <div className='update'>
                <div className='profile-photo'>
                    <img src={profileImg}></img>
                </div>
                <div className="message">
                  <p><b>Mike Tyson</b> received test message </p>
                  <small className="text-muted">2 Minutes Ago</small>
                </div>              
              </div>
              
            </div>
        </div>
    )
}

export default RightDown;