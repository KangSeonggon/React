/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'

import p1 from './img/songhwa/songhwa1.jpg'
import p2 from './img/songhwa/songhwa2.jpg'
import p3 from './img/songhwa/songhwa3.jpg'
import p4 from './img/songhwa/songhwa4.jpg'

function Songhwa(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <p>지금까지 다닌 만두, 가지튀김 통틀어서 단연 최고. 미쳤음 존맛, 도삭면 말고 가지튀김을 꼭 먹자.
            보통 군만두는 품절이라 없기 때문에 만약 있다면 시켜서 먹자.
        </p>
        <p>사실 단점이 없음. 만두, 가지튀김, 면 모두 가성비에 맛 완벽(진심)</p>
        <div className='photo'>
            <img src={p1}/>
            <img src={p2}/>
            <img src={p3}/>
            <img src={p4}/>
        </div>
    </div>
       
   )
}

export default Songhwa;