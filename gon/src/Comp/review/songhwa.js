/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'
import {ImStarFull} from 'react-icons/im'
import {ImStarHalf} from 'react-icons/im'
import {ImStarEmpty} from 'react-icons/im'

import p1 from './img/songhwa/songhwa1.jpg'
import p2 from './img/songhwa/songhwa2.jpg'
import p3 from './img/songhwa/songhwa3.jpg'
import p4 from './img/songhwa/songhwa4.jpg'
import p5 from './img/songhwa/songhwa5.jpg'
import p6 from './img/songhwa/songhwa6.jpg'
import p7 from './img/songhwa/songhwa7.jpg'

function Songhwa(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <div id='reviewstar'><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /></div>
        <p>지금까지 다닌 만두, 가지튀김 통틀어서 단연 최고. 미쳤음 존맛, 도삭면 보단 가지튀김을 꼭 먹자.
            여기 만두는 다 맛있으니까 한 번씩은 다 먹어보길.
            보통 군만두는 품절이라 없기 때문에 만약 있다면 시켜서 먹자.
        </p>
        <p>단점이 없음. 만두, 가지튀김, 면 모두 가성비에 맛 완벽(진심)</p>
        <div className='photo'>
            <img src={p1}/>
            <p>여기보다 맛있는 가지튀김을 본 적이 없다, 진짜 존맛이니까 꼭 먹자.</p>
            <img src={p2}/>
            <p>진리의 소룡포</p>
            <img src={p6}/>
            <p>새우아스파라거스, 이것도 진짜 존맛</p>
            <img src={p7}/>
            <p>충유면, 담백하니 맛있다. </p>
            <img src={p3}/>
            <p>희귀템 군만두</p>
            <img src={p4}/>
            <img src={p5}/>
            <p>새콤한 토마토계란면, 쇼마이 시켰을 때 나오는 장이랑 섞어먹으면 맛있다. 하지만 추천하진 않음.</p>
        </div>
    </div>
       
   )
}

export default Songhwa;