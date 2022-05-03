/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'

import p1 from './img/igyeong/igyeong1.jpg'

function Igyeong(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack  id='gobackSvg' onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <p>지금까지 두 번 먹었는데, 보통 한 시간씩 기다려서 입장. 들어갈때 냄새가 좀 나는 것 같으면서도?
            음식에서 돼지 비린내는 거의 안나는 편에 속함(개인적). 소주 안주.
        </p>
        <p>아무것도 안 먹고 주문도 안하고 몇 시간째 수다만 떨던 못생긴 언냐들 죽여버릴 뻔.</p>
        <div className='photo'>
            <img src={p1}></img>
        </div>
    </div>
       
   )
}

export default Igyeong;