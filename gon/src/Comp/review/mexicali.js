/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'
import {ImStarFull} from 'react-icons/im'
import {ImStarHalf} from 'react-icons/im'
import {ImStarEmpty} from 'react-icons/im'

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
        <div id='reviewstar'><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarHalf /></div>
        <p>2인이서 칼리 컴비네이션에 소기기 타코 2개 추가해서 배불리 먹음.
            컴비네이션 구성은 Fish타코, 퀘사디아, 빠빠, 치즈 나초.
            가게 분위기도 괜찮고 무엇보다 맛이 정말 괜찮다. 근처에 있어서 그냥 들어간 집인데 대만족.
            
        </p>
        <p>많이 먹지 않는다면 세트 하나로도 충분. Fish 타코가 의외로 존맛.</p>
        <div className='photo'>
            <img src={p1}></img>
            <p>Beef타코</p>
            <img src={p2}></img>
            <p>Fish타코</p>
            <img src={p3}></img>
            <p>빠빠, 먹다보면 조금 느끼하지만 맛이 없을 수 없는 꿀조합(감자, 고기, 채소)</p>
            <img src={p4}></img>
            <p>돼지고기 퀘사디아</p>
            <img src={p5}></img>
        </div>
    </div>
       
   )
}

export default Mexicali;