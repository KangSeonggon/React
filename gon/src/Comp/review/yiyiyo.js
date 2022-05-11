/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'

import p1 from './img/yiyiyo/yiyiyo1.jpg'
import p2 from './img/yiyiyo/yiyiyo2.jpg'

function Yiyiyo(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack  id='gobackSvg' onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <p>-</p>
        <div className='photo'>
            <img src={p1}></img>
            <img src={p2}></img>
        </div>
    </div>
       
   )
}

export default Yiyiyo;