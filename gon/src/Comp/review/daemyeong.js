/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'

import p1 from './img/daemyeong/daemyeong1.jpg'

function Daemye(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <p>기교 없는 오리지날 소곱창 집. 생일 맞아서 얻어먹었다 개꿀ㅋ</p>
        <p></p>
        <div className='photo'>
            <img src={p1}></img>
        </div>
    </div>
       
   )
}

export default Daemye;