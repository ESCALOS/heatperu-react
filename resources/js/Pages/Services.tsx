import Breadcrumb from '@/Components/Breadcrumb'
import { services } from '@/constants'
import Guest from '@/Layouts/GuestLayout'

type Service = {
    id: number
    name: string
    text: string
    image: string
}

function ServiceItem({ title, text, image }: { title: string, text: string, image: string }) {
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 h-96'>
            <img src={image} alt={title} className='object-cover' />
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

function Services() {


    return (
        <Guest title='Servicios'>
            <Breadcrumb title='Servicios' />
            <div className='px-4 py-12 mx-auto space-y-8 max-w-7xl'>
                {
                    services.map(({ id, title, text, image }) =>
                        <ServiceItem title={title} text={text} key={id} image={image} />
                    )
                }
            </div>
        </Guest>
    )
}

export default Services
