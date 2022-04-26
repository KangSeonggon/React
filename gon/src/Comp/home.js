import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import test from '../7298265.png'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

SwiperCore.use([Navigation, Pagination, Autoplay])

function Home() {
    return(
        <section className='landing'>
          <div className='container'>
            <div className='socials'>
              <a href='https://github.com/KangSeonggon' target='_blank'><AiFillGithub /></a>
              <a href='https://www.linkedin.com/in/seonggon-kang-6a7b91237/' target='_blank'><AiFillLinkedin /></a>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              // autoplay={{ delay: 3000 }}
              >
              <SwiperSlide>
                <div className='info'>
                  <h1>React Web Developer</h1>
                  <h3>Hi I'm Gonn</h3>
                  <p>People who succeed have momentum. The more they succeed, the more they want to succeed and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.</p>
                  <p>-</p>
                  <p id='p2'>Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.</p>
                </div>
              </SwiperSlide>
                
              <SwiperSlide>
                
                <div className="info">
                  <h1>Dashboard</h1>
                  <h3>Introduce my daily life</h3>
                  <p>Food</p>
                  <p>-</p>
                  <p>News</p>
                  <p>-</p>
                  <p>Test</p>
                  
                </div>
                
              </SwiperSlide>

              <SwiperSlide>
                <div className="info_portfolio"></div>
              </SwiperSlide>
              
            </Swiper>

            <div className='profile-area'>
              <div className='profile-box'></div>
              <div className='profile'><img src={test}></img></div>
            </div>
          </div>
        </section>

    )
}

export default Home;