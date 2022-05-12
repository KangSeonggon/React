/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'
import {ImStarFull} from 'react-icons/im'
import {ImStarHalf} from 'react-icons/im'
import {ImStarEmpty} from 'react-icons/im'
import p1 from './img/jegook/jegook1.jpg'
import p2 from './img/jegook/jegook2.jpg'
import p3 from './img/jegook/jegook3.jpg'
import p4 from './img/jegook/jegook4.jpg'

function Jegook(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <div id='reviewstar'><ImStarFull /><ImStarFull /><ImStarFull /><ImStarHalf /><ImStarEmpty /></div>
        <p>과거, 가격도 비싸지 않고 고기질이 좋아 자주 갔었음. 개인적으로 된장찌개, 육회, 안심 존맛. 와사비가 없다면 따로 달라하자.</p>
        <p>현재, 가격을 생각보다 많이 올림. 받은 접시기준 고기질이 안 좋아보일때도 가끔</p>
        <div className='photo'>
            <img src={p4}></img>
            <img src={p3}></img>
            <img src={p1}></img>
            <img src={p2}></img>
        </div>
    </div>
       
   )
}

export default Jegook;