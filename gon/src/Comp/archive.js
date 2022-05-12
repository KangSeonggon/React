/*eslint-disable*/
import React, {useState, useEffect} from 'react';
import {MdDateRange, MdAccessTime} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import flamingo from '../flamingo.png'
import { useSwiperSlide } from 'swiper/react';

// firebase db
import {firestore} from '../index.js'
import 'firebase/compat/firestore';


function Archive() {

    let [archiveModal, c_archiveModal] = useState('start');
    let date = new Date();

    // firebase
    const guestbook = firestore.collection('guestbook')
    // guestbook.get().then((결과)=>{
    //     결과.forEach((doc)=>{
    //         console.log(doc.data())
    //     })
    // })
    
    let [post,c_post] = useState([]);

    
    let [title, c_title] = useState('GuestBook');

    let [title_sort,c_title_sort] = useState([
        {
            title: 'GuestBook',
            sortcate: ['All']
        },
        {
            title: 'Programming',
            sortcate: ['All','Frontend','Backend','Embedded']
        },
        {
            title: 'Test',
            sortcate: ['All']
        },
        {
            title: 'Etc',
            sortcate: ['All']
        }
    ]    
    );

    let [sortdata2, c_sortdata2] = useState(['All','Ascending','Descending']);
    

    let [contentModal, c_contentModal] = useState([1,2,3,4,5]);

    let [content, c_content] = useState([
        {
            id : 1,
            category: 'GuestBook',
            title:'Welcome to Gon test',
            date: ['2022.04.28','13:22'],
            content:'To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings ch.......Read More'
        },
        {
            id : 2,
            category: 'GuestBook',
            title:'Hi, my name is',
            date: ['2022.03.20','09:03'],
            content:'이렇게 하고 보니, 한국어에서 일반적으로 보기 힘든 음절들이 자주 등장했다는 사실을 알게 됩니다. 보통 한국어에서는 ‘이’가 ‘앙’보다는, 특히 ‘꿻’이나 ‘굷’ 같은 음절보다 훨씬 빈번하게 등장하죠. 이번에는 일반적인 사용 빈도가 높은 음절들을 더 자주 등장시키도.......Read More'
        },
        {
            id : 3,
            category: 'Programming',
            title:'Auto',
            date: ['2021.12.28','20:55'],
            content:'하지만 이렇게 글자를 무작위로 나열하는 것은 아무런 의미를 가지지 않습니다. 일반적으로 한국어 텍스트는 초성, 중성, 종성으로 구성된 낱개의 음절들이 모여 단어를 이루고 [1] 이 단어들이 다시 모여 문장을 이루는데, 글자들을 랜덤으로 타이핑해서는 음절이나 단어를 이룰 수 있는 확률은 극히 희박하겠죠. 그래서 이번에는 고양이에게 음절을 타이핑하는 방법을.......Read More'
        },
        {
            id : 4,
            category: 'Test',
            title:'배고파',
            date: ['2021.12.28','20:55'],
            content:'하지만 이렇게 글자를 무작위로 나열하는 것은 아무런 의미를 가지지 않습니다. 일반적으로 한국어 텍스트는 초성, 중성, 종성으로 구성된 낱개의 음절들이 모여 단어를 이루고 [1] 이 단어들이 다시 모여 문장을 이루는데, 글자들을 랜덤으로 타이핑해서는 음절이나 단어를 이룰 수 있는 확률은 극히 희박하겠죠. 그래서 이번에는 고양이에게 음절을 타이핑하는 방법을.......Read More'
        },
        {
            id : 5,
            category: 'Etc',
            title:'퇴근시켜줘',
            date: ['2021.10.3','09:01'],
            content:'퇴근 시켜줘.......Read More'
        }
    ]);


    // 게시글 정렬
    useEffect(()=> {
        
        guestbook.where('id','>=',1).orderBy('id','desc').get().then((docs)=>{
            var arr = [];
            docs.forEach((doc)=> {
                if (doc.data().category == title) {
                    arr.push(doc.data())
                }
            })
            c_post(arr);
            
        })
        
        
        
        
    },[title])
    

    // 사이드 메뉴 바꾸느라 헤맴
    useEffect(()=>{
        let sortdata = title_sort.find(function(data){
            return data.title == title});
            c_sortdata2(sortdata.sortcate);
            
    },[title])

   return(

       <section className='archive'>
           <div className='overlay'>
                    <div className='nav'>
                        <h1>Archive</h1>
                        {/* <IoMdArrowRoundBack id="back" /> */}
                        <div className='navlist'>
                            <li><Link to='/archive' onClick={()=>{c_title('GuestBook');}}>GuestBook</Link></li>
                            <li><Link to='/archive' onClick={()=>{c_title('Programming')}}>Programming</Link></li>
                            <li><Link to='/archive' onClick={()=>{c_title('Test')}}>Test</Link></li>
                            <li><Link to='/archive' onClick={()=>{c_title('Etc')}}>Etc</Link></li>
                        </div>
                        <img id='flamingo' src={flamingo}></img>
                    </div>
                    <div className='board'>
                        <div className='boardtitle'>
                            <h2>{title}</h2>
                        </div>
                        <div className='boardcontent'>
                            <div className='boardcontentCate'>
                                <div className='addPost'>
                                    {
                                        title === 'GuestBook'
                                        ? <button>Add Post</button>
                                        : null
                                    }
                                    
                                </div>
                                <div className='catelist'>
                                    {
                                        sortdata2.map(function(data,i){
                                            return(
                                                <li><Link to='/archive' key={i}>{data}</Link></li>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                            <div className='boardcontentCont'>
                                 {
                                     post.map(function(data) {
                                         return(
                                             <>
                                             {
                                                 <div key={data.id} className='contentlist'>
                                                    <Link to='/archive'>
                                                        <h3>{data.title}</h3>
                                                    </Link>
                                                    <div className='contentdate'>
                                                        <MdDateRange />
                                                        <p id='date'>{data.date[0]}</p>
                                                        <MdAccessTime />
                                                        <p>{data.date[1]}</p>
                                                    </div>
                                                    <div className='content'>
                                                        <Link to='/archive' onClick={()=>{c_archiveModal(data.title)}}>
                                                            <p>{data.content}</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                             }
                                             </>
                                         )
                                     })
                                     
                                 }
                                
                                {/* { content.map(function(data) {
                                    return(
                                        <>
                                        {
                                            title === data.category
                                            ? <div key={data.id} className='contentlist'>
                                                    <Link to='/archive'>
                                                        <h3>{data.title}</h3>
                                                    </Link>
                                                    <div className='contentdate'>
                                                        <MdDateRange />
                                                        <p id='date'>{data.date[0]}</p>
                                                        <MdAccessTime />
                                                        <p>{data.date[1]}</p>
                                                    </div>
                                                    <div className='content'>
                                                        <Link to='/archive'>
                                                            <p>{data.content}</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            : null
                                        }
                                        </>
                                        
                                    )
                                })} */}


                            </div>
                        </div>
                    </div>
           </div>
       </section>
   )
}


export default Archive;