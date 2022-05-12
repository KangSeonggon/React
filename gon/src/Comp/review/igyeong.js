/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'
import {ImStarFull} from 'react-icons/im'
import {ImStarHalf} from 'react-icons/im'
import {ImStarEmpty} from 'react-icons/im'

import p1 from './img/igyeong/igyeong1.jpg'

function Igyeong(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack  id='gobackSvg' onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <div id='reviewstar'><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarEmpty /></div>
        <p>지금까지 두 번 먹었는데, 보통 한 시간씩 기다려서 입장. 들어갈때 냄새가 좀 나는 것 같으면서도?
            음식에서 돼지 비린내는 거의 안나는 편에 속함. 소주 안주로 제격이다. 대구 사람과 같이 먹었는데, 대구음식 마냥 간이 굉장히 쎄서 좋다고 함.
            본인 짭짤한 음식을 좋아하기 때문에 입맛에 잘 맞는걸지도</p>
        <p>아무것도 안 먹고 주문도 안하고 몇 시간째 수다만 떨던 못생긴 언냐들 죽여버릴 뻔.</p>
        <div className='photo'>
            <img src={p1}></img>
        </div>
    </div>
       
   )
}

export default Igyeong;