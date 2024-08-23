// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { homeSlides } from '@/constants'

export default () => {
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination, EffectFade]}
            effect='fade'
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            className='custom-swiper'
        >
            {
                homeSlides.map(({ id, alt }) =>
                    <SwiperSlide key={id} className='flex justify-center text-center bg-white'>
                        <img
                            src={`/images/slider/Imagen${id}.png`}
                            alt={alt}
                            style={{
                                maxHeight: '384px',
                                objectFit: 'cover',
                                display: 'inline-block',
                                textAlign: 'center'
                            }} />
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
};
