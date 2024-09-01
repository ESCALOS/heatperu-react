// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Media } from '@/types';

export default function CommoditySlider({ commodityName, media }: { commodityName: string, media: Media[] }) {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            className='h-full custom-swiper'
        >
            {
                media.map(({ id, original_url }) =>
                    <SwiperSlide key={id} className='flex justify-center text-center bg-white'>
                        <img
                            src={original_url}
                            alt={commodityName}
                            style={{
                                objectFit: 'cover',
                                display: 'inline-block',
                                textAlign: 'center',
                                height: '100%',
                            }} />
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
};
