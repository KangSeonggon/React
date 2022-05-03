/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'

import p1 from './img/mable/mable1.jpg'

function Mable(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <p>사장님 유쾌. 울회사 대표이름 알고있음. 너무 시리어스하지 않은 분위기에 돼지 소 모두 가볍게 즐길 수 있음.</p>
        <p>이름 기억안나는데 양념된 돼지고기 비추, 육회도 그닥</p>
        <div className='photo'>
            <img src={p1}></img>
        </div>
    </div>
       
   )
}

export default Mable;