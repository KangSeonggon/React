/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'
import {BsStarHalf} from 'react-icons/bs'

function Sobaku(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack id='gobackSvg' onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <BsStarHalf />
        <p>""</p>
        
        <div className='photo'>
            
        </div>
    </div>
       
   )
}

export default Sobaku;