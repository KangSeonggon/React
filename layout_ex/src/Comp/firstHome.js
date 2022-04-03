import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import '../firstHome.css'

function FirstHome() {
    return(
        <body>
            <div className="scan">
                <Link to='/dashboard'>
                    <div className="faceprint"></div>
                </Link>
                <h3>
                    Kang Seong GOn
                </h3>
            </div>
            
        </body>
       
    )
}

export default FirstHome;