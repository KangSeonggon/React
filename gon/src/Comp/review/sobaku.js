/*eslint-disable*/
import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'
import {ImStarFull} from 'react-icons/im'
import {ImStarHalf} from 'react-icons/im'
import {ImStarEmpty} from 'react-icons/im'

function Sobaku(props) {
   return(
    <div className='photoModal'>
        <IoMdArrowRoundBack id='gobackSvg' onClick={() => { props.c_photoModal('') }} />
        <h2>Review</h2>
        <div id='reviewstar'><ImStarFull /><ImStarFull /><ImStarFull /><ImStarEmpty /><ImStarEmpty /></div>
        <p>""</p>
        
        <div className='photo'>
            
        </div>
    </div>
       
   )
}

export default Sobaku;