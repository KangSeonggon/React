/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'
import {ImStarFull} from 'react-icons/im'
import {ImStarHalf} from 'react-icons/im'
import {ImStarEmpty} from 'react-icons/im'

import p1 from './img/daemyeong/daemyeong1.jpg'

function Daemye(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <div id='reviewstar'><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarEmpty /></div>
        <p>기교 없는 오리지날 소곱창 집. 생일 맞아서 얻어먹었다 개꿀ㅋ</p>
        <p></p>
        <div className='photo'>
            <img src={p1}></img>
        </div>
    </div>
       
   )
}

export default Daemye;