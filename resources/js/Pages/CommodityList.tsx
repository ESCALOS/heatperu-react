import Breadcrumb from '@/Components/Breadcrumb';
import Pagination from '@/Components/Pagination';
import Guest from '@/Layouts/GuestLayout';
import { Category, Commodity, Family, PageProps } from '@/types'
import { Link } from '@inertiajs/react'
import { useEffect } from 'react';

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

    useEffect(() => {
        console.log(commodities);

        return () => {
            console.clear();
            console.log('Lista desmontada');
        }
    }, [])

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
                            <div
                                key={id}
                                className="flex flex-col items-center gap-4 p-4 text-center border h-[434px] w-[294px]"
                            >
                                <h2 className="content-center inline-block h-[72px] overflow-hidden font-semibold line-clamp-2 text-md">{name}</h2>
                                {media.length > 0 ? (
                                    <img
                                        src={media[0].original_url}
                                        alt={name}
                                        className="object-cover w-64 h-64 rounded-lg"
                                    />
                                ) : (
                                    <p className="flex items-center justify-center w-64 h-64 bg-gray-100">
                                        Imagen no disponible
                                    </p>
                                )}
                                <Link href={`/${category?.family?.slug}/${category?.slug}/${slug}`} className='w-full px-4 py-2 font-bold text-white transition-colors rounded-md bg-secondary-500 hover:bg-secondary-400'>
                                    Ver más
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <Pagination links={commodities.links} lastPage={commodities.last_page} currentPage={commodities.current_page} />
            </div>
        </Guest>
    )
}

export default CommodityList;
