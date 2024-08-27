// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { clients } from '@/constants'

type Props = {}

function ClientList({ }: Props) {
    return (

        <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            className='mx-auto custom-swiper max-w-7xl'
        >
            {
                clients.map(({ id, name }) =>
                    <SwiperSlide key={id} className='flex items-center justify-center text-center bg-white'>
                        <img
                            src={`/images/clients/${name}.png`}
                            alt={name}
                            style={{
                                display: 'inline-block',
                                textAlign: 'center',
                                maxHeight: '300px'
                            }} />
                    </SwiperSlide>
                )
            }
        </Swiper>
    )
}

export default ClientList
