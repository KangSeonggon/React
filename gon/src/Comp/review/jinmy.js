/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'
import {ImStarFull} from 'react-icons/im'
import {ImStarHalf} from 'react-icons/im'
import {ImStarEmpty} from 'react-icons/im'

import p1 from './img/jinmy/jinmy1.jpg'
import p2 from './img/jinmy/jinmy2.jpg'

function Jinmy(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <div id='reviewstar'><ImStarFull /><ImStarFull /><ImStarHalf /><ImStarEmpty /><ImStarEmpty /></div>
        <p>평양냉면이 맛있는지는 여전히 잘 모르겠음. 생각보다 어복쟁반을 먹는 사람들이 굉장히 많았음. 마포구 쪽에 있는 을밀대도 가본 적이 있는데, 솔직히 어디가 더 맛있는지 판단이 안됨; 그냥 다 슴슴함.</p>
        <p>수육도 그냥 뭐 수육임. 먹었을 당시 1시간 좀 안되게 기다렸는데, 절대 기다려서 먹을만한 맛집은 아님(내 기준)</p>
        <div className='photo'>
            <img src={p1}></img>
            <img src={p2}></img>
        </div>
    </div>
       
   )
}

export default Jinmy;