/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'
import {ImStarFull} from 'react-icons/im'
import {ImStarHalf} from 'react-icons/im'
import {ImStarEmpty} from 'react-icons/im'

import p2 from './img/yuz/yuz2.jpg'
import p3 from './img/yuz/yuz3.jpg'

function Yuz(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack  id='gobackSvg' onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <div id='reviewstar'><ImStarFull /><ImStarFull /><ImStarFull /><ImStarEmpty /><ImStarEmpty /></div>
        <p>아는 사람이 정말 맛있다 노래를 불러서 찾아가 본 집. 여기는 안국역 쪽이고 더 유명한 곳은 아마 서울역 부근?</p>
        <p>내가 먹은 건 유즈 시오(소금)라멘, 테이블에 유자 원액을 기호에 맞게 첨가해 먹으면 된다.
            은은한 유자향은 나쁘지 않다. 하지만 생각보다 라멘과 유자가 어울리질 않아서 엄청 맛있다는 느낌을 받지 못했다.</p>
        <div className='photo'>
            <img src={p2}></img>
            <img src={p3}></img>
        </div>
    </div>
       
   )
}

export default Yuz;