/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'

import p1 from './img/jinmy/jinmy1.jpg'
import p2 from './img/jinmy/jinmy2.jpg'

function Jinmy(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <p>여전히 잘 모르겠는 평양냉면</p>
        <div className='photo'>
            <img src={p1}></img>
            <img src={p2}></img>
        </div>
    </div>
       
   )
}

export default Jinmy;