/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'

import p1 from './img/chunmichun/chunmichun1.jpg'

function Chunmi(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack  id='gobackSvg' onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <p>훠궈 무한리필 집, 재료 모두 깔끔하고 신선. 훠궈 먹고싶으면 보통 여기로 감</p>
        <div className='photo'>
            <img src={p1}></img>
        </div>
    </div>
       
   )
}

export default Chunmi;