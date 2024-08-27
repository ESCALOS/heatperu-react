// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { clients } from '@/constants'

type Props = {}

function ClientList({ }: Props) {
    return (

        <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={10}
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
            className='border-t border-gray-300 custom-swiper'
        >
            {
                clients.slice(0, 2).map(({ id, name }) =>
                    <SwiperSlide key={id} className='flex items-center justify-center text-center bg-white'>
                        <img
                            src={`/images/clients/${name}.png`}
                            alt={name}
                            style={{
                                display: 'inline-block',
                                textAlign: 'center',
                                maxHeight: '300px',
                                paddingTop: '3rem',
                                paddingBottom: '3rem'
                            }} />
                    </SwiperSlide>
                )
            }
        </Swiper>
    )
}

export default ClientList
