import { BiEnvelope, BiMapPin, BiMobileAlt } from 'react-icons/bi'
import { LuCalendarClock } from 'react-icons/lu'

function ContactList() {
    return (
        <div className='container flex flex-wrap items-center gap-4 py-16 justify-evenly'>
            <div className='flex flex-col items-center justify-center max-w-xs gap-4 p-4 h-30'>
                <BiMapPin size={44} />
                <h3 className='text-xl font-bold'>Dirección</h3>
                <div className='text-center'>
                    <p>Av. Argentina 575 Tienda H13</p>
                    <p>Urb. Lima Industrial - Cercado de Lima</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center max-w-xs gap-4 p-4 h-30'>
                <BiMobileAlt size={44} />
                <h3 className='text-xl font-bold'>Contacto</h3>
                <div className='text-center'>
                    <a href='tel:+51961749562'>Celular : +51 961-749-562</a>
                    <p>
                        <BiEnvelope className='inline-block mr-1' />
                        <a href='mailto:ventas@heatperu.com'>ventas@heatperu.com</a>
                    </p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center max-w-xs gap-4 p-4 h-30'>
                <LuCalendarClock size={44} />
                <h3 className='text-xl font-bold'>Horario</h3>
                <div className='text-center'>
                    <p>Lunes a Viernes de 9:30am - 6:00pm</p>
                    <p>Sábados de 9:30am - 3:00pm</p>
                </div>
            </div>
        </div>
    )
}

export default ContactList
