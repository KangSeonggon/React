/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'

import p1 from './img/spaka/spaka1.jpg'
import p2 from './img/spaka/spaka2.jpg'
import p3 from './img/spaka/spaka3.jpg'
import p4 from './img/spaka/spaka4.jpg'

function Spaka(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack  id='gobackSvg' onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <p>괜찮은 화덕피자집. 우리가 먹은건 마르게리따, 바실리코 부라타. 
            피자가 식지 않게 초를 켠 bowl위에 얹어준다</p>
        <p>파스타는 별로</p>
        <div className='photo'>
            <img src={p1}></img>
            <img src={p2}></img>
            <img src={p3}></img>
            <img src={p4}></img>
        </div>
    </div>
       
   )
}

export default Spaka;