/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'
import {ImStarFull} from 'react-icons/im'
import {ImStarHalf} from 'react-icons/im'
import {ImStarEmpty} from 'react-icons/im'

import p1 from './img/songgye/songgye1.jpg'
import p2 from './img/songgye/songgye2.jpg'

function Songgye(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <div id='reviewstar'><ImStarFull /><ImStarFull /><ImStarFull /><ImStarHalf /><ImStarEmpty /></div>
        <p>양이 많진 않지만 직원이 고기를 다 구워주고 메뉴 모두 전체적으로 맛있다.
            우동은 조금 짠 편이었던걸로 기억하는데, 맛있었음.
        </p>
        <p>대기가 너무 길다, 그렇게까지 기다려서 먹어야 되나? 물어보면 그건 아닌듯</p>
        <div className='photo'>
            <img src={p1}></img>
            <img src={p2}></img>
        </div>
    </div>
       
   )
}

export default Songgye;