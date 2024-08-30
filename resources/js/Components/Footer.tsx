import { PageProps } from '@/types';
import { shuffleArray } from '@/utils';
import { usePage } from '@inertiajs/react';
import { ReactNode, useId } from 'react';
import { BiCalendar, BiEnvelope, BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiMapPin, BiMobile, BiPaperPlane } from 'react-icons/bi';

function ListTemplate({ title, children }: { title: string, children: ReactNode }) {
    return (
        <div className='min-w-[290px]'>
            <h2 className='mb-4 text-2xl font-bold text-white'>{title}</h2>
            {children}
        </div>
    )
}

function FamilyList() {
    const { familyList } = usePage<PageProps>().props;
    const shuffledFamilyList = shuffleArray(familyList);
    return (
        <ListTemplate title='Categorías'>
            <ul className='flex flex-col gap-4 text-gray-200 capitalize'>
                {shuffledFamilyList.slice(0, 5).map(family => (
                    <li key={family.id}><a href="/">{family.name.toLocaleLowerCase()}</a></li>
                ))}
            </ul>
        </ListTemplate>
    )
}

function ContactUs() {

    return (
        <ListTemplate title='Contáctanos'>
            <ul className='flex flex-col gap-4 text-sm text-gray-200'>
                <li className='flex gap-2'>
                    <BiMapPin />
                    <span>Av. Argentina 575 Tienda H13 <br /> Urb. Lima Industrial - Cercado de Lima</span>
                </li>
                <li className='flex gap-2'>
                    <BiMobile />
                    <a href="tel:961749562">961-749-562</a>
                </li>
                <li className='flex gap-2'>
                    <BiEnvelope />
                    <a href="mailto:ventas@heatperu.com">ventas@heatperu.com</a>
                </li>
                <li className='flex gap-2'>
                    <BiCalendar />
                    <span>Lunes a Viernes de 9:30am - 6:00pm<br />
                        Sábados de 9:30am - 4:00pm</span>
                </li>
            </ul>
        </ListTemplate>
    )
}

function Subscribe() {
    const subscribeId = useId();
    return (
        <ListTemplate title='Síguenos'>
            <ul className='flex gap-4'>
                <li>
                    <a className='block p-1 text-white bg-blue-500 rounded-full' href="https://www.facebook.com/heatfactoryperu" target='_blank' title='facebook'>
                        <BiLogoFacebook size={30} />
                    </a>
                </li>
                <li>
                    <a className='block p-0.5 text-white rounded-lg' style={{ background: 'radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf)' }} href="https://www.instagram.com/calderas_quemadores_peru" target='_blank' title='instagram'>
                        <BiLogoInstagram size={32} />
                    </a>
                </li>
                <li>
                    <a className='block p-1 text-white bg-blue-500 rounded-md' href="https://www.facebook.com/heatfactoryperu" target='_blank' title='facebook'>
                        <BiLogoLinkedin size={30} />
                    </a>
                </li>
            </ul>
            <h2 className='my-6 mb-4 text-2xl font-bold text-white'>Suscríbete</h2>
            <form action="/" className='flex'>
                <input required type="email" placeholder='Email' id={subscribeId} name='email' className='w-full p-4 text-sm text-gray-700 border-gray-400 rounded-l-md focus:ring focus:ring-transparent focus:border-gray-400' />
                <button className='px-4 py-2 text-white bg-primary-500 rounded-r-md'><BiPaperPlane size={24} /></button>
            </form>
        </ListTemplate>
    )
}

export default function Footer() {

    return (
        <div className='bg-secondary-500'>
            <div className='container flex flex-wrap items-start justify-around gap-8 py-12'>
                <FamilyList />
                <ContactUs />
                <Subscribe />
            </div>
        </div>
    )

}
