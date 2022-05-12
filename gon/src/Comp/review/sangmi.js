/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'
import {ImStarFull} from 'react-icons/im'
import {ImStarHalf} from 'react-icons/im'
import {ImStarEmpty} from 'react-icons/im'

import p1 from './img/sangmi/sangmi1.jpg'
import p2 from './img/sangmi/sangmi2.jpg'

function Sangmi(props) {
   return(
       <div className='photoModal'>
           <IoMdArrowRoundBack id='gobackSvg'  onClick={() => { props.c_photoModal('') }} />
           <h2>Review</h2>
           <div id='reviewstar'><ImStarFull /><ImStarFull /><ImStarFull /><ImStarHalf /><ImStarEmpty /></div>
           <p>괜찮은 가성비 횟집, 특출나진 않지만 저렴하고 맛있게 회를 즐길 수 있다.
               갈때마다 거의 만석이며, 사장님도 굉장히 친절하시다.
           </p>

           <div className='photo'>
               <img src={p1}></img>
               <img src={p2}></img>
            </div>
       </div>
       
   )
}

export default Sangmi;