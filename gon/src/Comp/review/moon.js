/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'
import {ImStarFull} from 'react-icons/im'
import {ImStarHalf} from 'react-icons/im'
import {ImStarEmpty} from 'react-icons/im'

import p1 from './img/moon/moon1.jpg'
import p2 from './img/moon/moon2.jpg'
import p3 from './img/moon/moon3.jpg'
import p4 from './img/moon/moon4.jpg'

function Moon(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <div id='reviewstar'><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarEmpty /></div>
        <p>군자 골목에 숨어있는 조그만 술집. 좌석이 대략 8개?
            좁기도 하고 자리가 많지 않아서 퇴근하고 갈 때면 꽉 차있는 경우가 많다.
            혼자서 오는 경우도 굉장히 많은 듯. 커리가지튀김, 닭다리살&꽈리고추 튀김 존맛
        </p>
        <p>
            메뉴 전체적으로 맛이 괜찮다. 하지만 스키야키는 생각보다 너무 밋밋했음
        </p>
        
        <div className='photo'>
            <img src={p1}></img>
            <p>스키야키</p>
            <img src={p2}></img>
            <p>커리가지튀김</p>
            <img src={p3}></img>
            <p>닭다리살&꽈리고추 튀김</p>
            <img src={p4}></img>
        </div>
    </div>
       
   )
}

export default Moon;