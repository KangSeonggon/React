/*eslint-disable*/
import React from 'react';
import { FaMicrosoft } from 'react-icons/fa'
import {IoMdArrowRoundBack} from 'react-icons/io'

function Archive() {
   return(
       <section className='archive'>
           <div className='overlay'>
                    <div className='nav'>
                        <h1>Archive</h1>
                        {/* <IoMdArrowRoundBack id="back" /> */}
                        <div className='navlist'>
                            <span><h4>Guest Book</h4></span>
                            <span><h4>Programming Board</h4></span>
                            <span><h4>Etc Board</h4></span>
                        </div>
                        
                    </div>
                    <div className='board'>
                        <div className='boardtitle'>
                            <h2>Title</h2>
                        </div>
                        <div className='boardcontent'>

                        </div>
                    </div>
           </div>
       </section>
   )
}

export default Archive;