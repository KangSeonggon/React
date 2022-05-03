/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'

import p1 from './img/songgye/songgye1.jpg'
import p2 from './img/songgye/songgye2.jpg'

function Songgye(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <p>양이 많진 않지만 깔끔하니 맛있음, 다 구워줌. 사실 특별한 장점을 찾기는 조금 그럼;
            하지만 모든 메뉴 다 평타이상, 좋은 분위기, 다양한 소스 굳
        </p>
        <p>대기가 너무 김</p>
        <div className='photo'>
            <img src={p1}></img>
            <img src={p2}></img>
        </div>
    </div>
       
   )
}

export default Songgye;