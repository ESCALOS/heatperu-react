// import Swiper core and required modules
import { Navigation, Pagination, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, EffectFade]}
            effect='fade'
            navigation
            pagination={{ clickable: true }}
            className='h-96'
        >
            <SwiperSlide className='content-center inline-block text-center bg-primary-200'>Slide 1</SwiperSlide>
            <SwiperSlide className='content-center inline-block text-center bg-primary-200'>Slide 2</SwiperSlide>
            <SwiperSlide className='content-center inline-block text-center bg-primary-200'>Slide 3</SwiperSlide>
            <SwiperSlide className='content-center inline-block text-center bg-primary-200'>Slide 4</SwiperSlide>
        </Swiper>
    );
};
