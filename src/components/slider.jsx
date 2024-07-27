import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';

export default function Slider() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
  return (
    <>
      <Swiper 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} 
        keyboard={{enabled: true,}} loop={true} pagination={pagination} navigation={true} 
      modules={[Navigation,Pagination,Keyboard,Autoplay]} className="mySwiper">
        <SwiperSlide><img className='pic' src="/src/assets/images/895.jpg"/></SwiperSlide>
        <SwiperSlide><img className='pic' src="/src/assets/images/439602.jpg"/></SwiperSlide>
        <SwiperSlide><img className='pic' src="/src/assets/images/439612.jpg"/></SwiperSlide>
        <SwiperSlide><img className='pic' src="/src/assets/images/3373581.jpg"/></SwiperSlide>
      </Swiper>
    </>
  );
}
