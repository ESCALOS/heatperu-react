import { Commodity } from '@/types';
import Card from './Card';
import { BiCheckCircle, BiXCircle } from 'react-icons/bi';

type Props = {
    commodities: Commodity[]
}

const CommoditySearchResults = ({ commodities }: Props) => {

    return (
        <div className='container py-12'>
            <h1 className="mb-8 text-2xl font-bold text-center">
                Lista de Productos
            </h1>
            {commodities.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-6" id='productList'>
                    {commodities.map(({ id, sku, name, media, slug, available, category, brand }) => {
                        const link = `/${category?.family?.name.toLocaleLowerCase()}/${category?.name.toLocaleLowerCase()}/${slug}`;
                        const image = media.find(x => x.collection_name === "commodities")
                        return (
                            <Card
                                key={id}
                                title={name}
                                titleHeight={60}
                                link={link}
                                imgPath={image?.original_url}
                            >
                                <div className='flex flex-col justify-around w-full gap-3 text-sm'>
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
            ) : (
                <p className="text-lg text-center text-gray-500">No se encontraron productos que coincidan con tu búsqueda.</p>
            )}
        </div>
    );
};

export default CommoditySearchResults;
