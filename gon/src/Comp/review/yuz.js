/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'

import p2 from './img/yuz/yuz2.jpg'
import p3 from './img/yuz/yuz3.jpg'

function Yuz(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack  id='gobackSvg' onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <p>-</p>
        <div className='photo'>
            <img src={p2}></img>
            <img src={p3}></img>
        </div>
    </div>
       
   )
}

export default Yuz;