import { Commodity } from '@/types'; // Ajusta la ruta según tu estructura
import { BsWhatsapp } from 'react-icons/bs';

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
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {commodities.map((commodity) => (
                        <div
                            key={commodity.id}
                            className="flex flex-col items-center gap-4 p-4 text-center border"
                        >
                            <h2 className="font-semibold text-md">{commodity.name}</h2>
                            {commodity.media.length > 0 ? (
                                <img
                                    src={commodity.media[0].original_url}
                                    alt={commodity.name}
                                    className="object-cover w-64 h-64 rounded-lg"
                                />
                            ) : (
                                <p className="flex items-center justify-center w-64 h-64 bg-gray-100">
                                    Imagen no disponible
                                </p>
                            )}
                            <button className='w-full px-4 py-2 font-bold text-white transition-colors rounded-md bg-secondary-500 hover:bg-secondary-400'>
                                <BsWhatsapp size={22} className='content-center inline-block' /> Consultar ahora
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-lg text-center text-gray-500">No se encontraron productos que coincidan con tu búsqueda.</p>
            )}
        </div>
    );
};

export default CommoditySearchResults;
