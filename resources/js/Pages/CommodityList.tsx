import Breadcrumb from '@/Components/Breadcrumb';
import Card from '@/Components/Card';
import Pagination from '@/Components/Pagination';
import Guest from '@/Layouts/GuestLayout';
import { Category, Commodity } from '@/types'
import { getURLToSendMessageToWhatsapp } from '@/utils';
import { BiCheckCircle, BiXCircle } from 'react-icons/bi';
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
            <Breadcrumb title={categoryName} imagePath='banner3.webp' />
            <div className='container py-12'>
                <div className="flex flex-wrap justify-center gap-6" id='productList'>
                    {commodities.data.sort((a, b) => a.name.localeCompare(b.name)).map(({ id, sku, name, media, slug, available, category, brand }) => {
                        const link = `/${category?.family?.name.toLocaleLowerCase()}/${category?.name.toLocaleLowerCase()}/${slug}`;
                        return (
                            <Card
                                key={id}
                                title={name}
                                titleHeight={60}
                                link={link}
                                imgPath={media[0]?.original_url}
                            >
                                <div className='flex flex-col justify-around w-full text-sm gap-3'>
                                    <div>
                                        <span className='font-bold'>SKU: </span>
                                        {sku}
                                    </div>
                                    <div>
                                        <span className='font-bold'>Marca: </span>
                                        {brand?.name ?? 'Genérico'}
                                    </div>
                                    <div className='flex items-center justify-center gap-1 font-bold'>
                                        {available ? (
                                            <>
                                                <BiCheckCircle className='text-green-500' size={18} />
                                                <span className='text-green-500'>Disponible</span>
                                            </>
                                        ) : (
                                            <>
                                                <BiXCircle className='text-red-500' size={18} />
                                                <span className='text-red-500'>No Disponible</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </div>
                <Pagination links={commodities.links} lastPage={commodities.last_page} currentPage={commodities.current_page} />
            </div>
        </Guest>
    )
}

export default CommodityList;
