/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'

import p1 from './img/moon/moon1.jpg'
import p2 from './img/moon/moon2.jpg'
import p3 from './img/moon/moon3.jpg'
import p4 from './img/moon/moon4.jpg'

function Moon(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <p>-</p>
        
        <div className='photo'>
            <img src={p1}></img>
            <img src={p2}></img>
            <img src={p3}></img>
            <img src={p4}></img>
        </div>
    </div>
       
   )
}

export default Moon;