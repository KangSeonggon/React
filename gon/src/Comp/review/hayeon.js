/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'

import p1 from './img/hayeon/hayeon1.jpg'
import p2 from './img/hayeon/hayeon2.jpg'

function Hayeon(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <p>육전이 존맛이었음. 냉면은 지인들 기준 매우 짰다고 함. 본인 짠 걸 좋아해서 나름 맛있게 먹었음.</p>
        <p>뭐 특별한 건 없음</p>
        <div className='photo'>
            <img src={p1}></img>
            <img src={p2}></img>
        </div>
    </div>
       
   )
}

export default Hayeon;