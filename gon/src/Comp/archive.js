/*eslint-disable*/
import React, {useState, useEffect} from 'react';
import {MdDateRange, MdAccessTime} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import walrus from '../walrus.png'
import { useSwiperSlide } from 'swiper/react';

function Archive() {
    let [title, c_title] = useState('GuestBook');

    let [contentModal, c_contentModal] = useState([1,2,3,4,5]);

    let [content, c_content] = useState([
        {
            id : 1,
            title:'Welcome to Gon test',
            date: ['2022.04.28','13:22'],
            content:'To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings ch.......Read More'
        },
        {
            id : 2,
            title:'Hi, my name is',
            date: ['2022.03.20','09:03'],
            content:'이렇게 하고 보니, 한국어에서 일반적으로 보기 힘든 음절들이 자주 등장했다는 사실을 알게 됩니다. 보통 한국어에서는 ‘이’가 ‘앙’보다는, 특히 ‘꿻’이나 ‘굷’ 같은 음절보다 훨씬 빈번하게 등장하죠. 이번에는 일반적인 사용 빈도가 높은 음절들을 더 자주 등장시키도.......Read More'
        },
        {
            id : 3,
            title:'Fuck Autosemantics',
            date: ['2021.12.28','20:55'],
            content:'하지만 이렇게 글자를 무작위로 나열하는 것은 아무런 의미를 가지지 않습니다. 일반적으로 한국어 텍스트는 초성, 중성, 종성으로 구성된 낱개의 음절들이 모여 단어를 이루고 [1] 이 단어들이 다시 모여 문장을 이루는데, 글자들을 랜덤으로 타이핑해서는 음절이나 단어를 이룰 수 있는 확률은 극히 희박하겠죠. 그래서 이번에는 고양이에게 음절을 타이핑하는 방법을.......Read More'
        },
        {
            id : 4,
            title:'배고파',
            date: ['2021.12.28','20:55'],
            content:'하지만 이렇게 글자를 무작위로 나열하는 것은 아무런 의미를 가지지 않습니다. 일반적으로 한국어 텍스트는 초성, 중성, 종성으로 구성된 낱개의 음절들이 모여 단어를 이루고 [1] 이 단어들이 다시 모여 문장을 이루는데, 글자들을 랜덤으로 타이핑해서는 음절이나 단어를 이룰 수 있는 확률은 극히 희박하겠죠. 그래서 이번에는 고양이에게 음절을 타이핑하는 방법을.......Read More'
        },
        {
            id : 5,
            title:'퇴근시켜줘',
            date: ['2021.10.3','09:01'],
            content:'나 왜 회사? 퇴근 시켜줘.......Read More'
        }
    ]);

   return(

       <section className='archive'>
           <div className='overlay'>
                    <div className='nav'>
                        <h1>Archive</h1>
                        {/* <IoMdArrowRoundBack id="back" /> */}
                        <div className='navlist'>
                            <li><Link to='/archive' onClick={()=>{c_title('GuestBook')}}>GuestBook</Link></li>
                            <li><Link to='/archive' onClick={()=>{c_title('Programming')}}>Programming</Link></li>
                            <li><Link to='/archive' onClick={()=>{c_title('Etc')}}>Etc</Link></li>
                        </div>
                        <img id='walrus' src={walrus}></img>
                    </div>
                    <div className='board'>
                        <div className='boardtitle'>
                            <h2>{title}</h2>
                        </div>
                        <div className='boardcontent'>
                            <div className='boardcontentCate'>
                                <div className='catelist'>
                                    <li><Link to='/archive'>All</Link></li>
                                    <li><Link to='/archive'>Example</Link></li>
                                    <li><Link to='/archive'>gon</Link></li>
                                    <li><Link to='/archive'>test</Link></li>
                                </div>
                            </div>
                            <div className='boardcontentCont'>
                                { content.map(function(data) {
                                    return(
                                        <div key={data.id} className='contentlist'>
                                            <Link to='/archive/guestbook1'>
                                                <h3>{data.title}</h3>
                                            </Link>
                                            <div className='contentdate'>
                                                <MdDateRange />
                                                <p id='date'>{data.date[0]}</p>
                                                <MdAccessTime />
                                                <p>{data.date[1]}</p>
                                            </div>
                                            <div className='content'>
                                                <Link to='/archive/guestbook1'>
                                                    <p>{data.content}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                    </div>
           </div>
       </section>
   )
}

export default Archive;