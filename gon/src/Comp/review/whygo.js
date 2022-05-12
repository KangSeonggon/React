/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'
import {ImStarFull} from 'react-icons/im'
import {ImStarHalf} from 'react-icons/im'
import {ImStarEmpty} from 'react-icons/im'

import p2 from './img/whygo/whygo2.jpg'
import p3 from './img/whygo/whygo3.jpg'
import p4 from './img/whygo/whygo4.jpg'

function Whygo(props) {
   return(
    <div className='photoModal'>
    <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
    <h2>Review</h2>
    <div id='reviewstar'><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarHalf /></div>
    <p>진짜 자주 가는 돼지고기집, 삼겹살보다 갈매기살이 진리. 고기 주문하면 껍데기도 조금씩 주는데 이것도 쫀득쫀득 맛있다.</p>
    <p>사이드 메뉴는 조금 아쉽다. 사이드에 힘을 더 주면 별 5개까지 가능</p> 
    <div className='photo'>
        <img src={p2}></img>
        <img src={p3}></img>
        <img src={p4}></img>
    </div>
    </div>
       
   )
}

export default Whygo;