import Breadcrumb from '@/Components/Breadcrumb';
import Card from '@/Components/Card';
import Pagination from '@/Components/Pagination';
import Guest from '@/Layouts/GuestLayout';
import { Category, Commodity } from '@/types'
import { Link } from '@inertiajs/react'
import { BsWhatsapp } from 'react-icons/bs';

type Props = {
    commodities: {
        data: Commodity[],
        links: {
            url: string | null,
            label: string,
            active: boolean
        }[],
        last_page: number,
        current_page: number,
    };
    category?: Category;
}

const CommodityList = ({ commodities, category }: Props) => {
    const categoryName = category?.name || 'Lista de Productos';

    return (
        <Guest title={categoryName}>
            <Breadcrumb title={categoryName} backgroundImage="/megumi.jpg" />
            <div className='container py-12'>
                <h1 className="mb-8 text-3xl font-bold text-center">
                    <span className='capitalize'>{categoryName}</span>
                </h1>
                <div className="flex flex-wrap justify-center gap-6">
                    {commodities.data.map(({ id, name, slug, media, category }) => {
                        return (
                            <Card
                                key={id}
                                title={name}
                                titleHeight={60}
                                imgPath={media[0]?.original_url}
                                footer={
                                    <button className='button-card'>
                                        <BsWhatsapp size={22} className='content-center inline-block' /> Consultar ahora
                                    </button>
                                }
                            />
                        )
                    })}
                </div>
                <Pagination links={commodities.links} lastPage={commodities.last_page} currentPage={commodities.current_page} />
            </div>
        </Guest>
    )
}

export default CommodityList;
