/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'

import p1 from './img/sinbal/sinbal1.jpg'
import p2 from './img/sinbal/sinbal2.jpg'

function Sinbal(props) {
   return(
       <div className='photoModal'>
           <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
           <h2>Review</h2>
           <p>만두를 먹을때면 건대 송화산시도삭면이 생각남..부산 신발원도 물론 유명하고 나름 괜찮지만
               도삭면집을 따라올 순 없음.
           </p>
           <p>어쨌든 제일 맛있었던 건 새우교자.</p>

           <div className='photo'>
               <img src={p1}></img>
               <img src={p2}></img>
            </div>
       </div>
       
   )
}

export default Sinbal;