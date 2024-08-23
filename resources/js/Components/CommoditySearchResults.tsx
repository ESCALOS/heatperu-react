import { Commodity } from '@/types'; // Ajusta la ruta según tu estructura
import { BsWhatsapp } from 'react-icons/bs';
import Card from './Card';

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
                <div className="grid items-center justify-center grid-cols-3 gap-6">
                    {commodities.map(({ id, name, media }) => (
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
                    ))}
                </div>
            ) : (
                <p className="text-lg text-center text-gray-500">No se encontraron productos que coincidan con tu búsqueda.</p>
            )}
        </div>
    );
};

export default CommoditySearchResults;
