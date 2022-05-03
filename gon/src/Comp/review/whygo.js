/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'

import p2 from './img/whygo/whygo2.jpg'
import p3 from './img/whygo/whygo3.jpg'
import p4 from './img/whygo/whygo4.jpg'

function Whygo(props) {
   return(
    <div className='photoModal'>
    <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
    <h2>Review</h2>
    <p>진짜 자주 가는 돼지고기집, 삼겹살보다 갈매기살이 진리. 돼지 껍데기도 존맛</p>
    <p>사이드 메뉴는 아쉬움</p> 
    
    
    <div className='photo'>
        <img src={p2}></img>
        <img src={p3}></img>
        <img src={p4}></img>
    </div>
    </div>
       
   )
}

export default Whygo;