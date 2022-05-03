/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'

import p1 from './img/mexicali/mexicali1.jpg'
import p2 from './img/mexicali/mexicali2.jpg'
import p3 from './img/mexicali/mexicali3.jpg'
import p4 from './img/mexicali/mexicali4.jpg'
import p5 from './img/mexicali/mexicali5.jpg'

function Mexicali(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <p>2인이서 세트 메뉴 하나에 타코 추가해서 배불리 먹음. 많이 먹지 않는다면 세트 하나로도 충분. Fish 타코가
            의외로 존맛.
        </p>
        <p></p>
        <div className='photo'>
            <img src={p1}></img>
            <img src={p2}></img>
            <img src={p3}></img>
            <img src={p4}></img>
            <img src={p5}></img>
        </div>
    </div>
       
   )
}

export default Mexicali;