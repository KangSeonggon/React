/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'

import p1 from './img/songhwa/songhwa1.jpg'
import p2 from './img/songhwa/songhwa2.jpg'
import p3 from './img/songhwa/songhwa3.jpg'
import p4 from './img/songhwa/songhwa4.jpg'

function Songhwa(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <div className='photo'>
            <img src={p1}/>
            <img src={p2}/>
            <img src={p3}/>
            <img src={p4}/>
            

        </div>
    </div>
       
   )
}

export default Songhwa;