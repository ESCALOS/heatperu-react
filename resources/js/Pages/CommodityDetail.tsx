import Breadcrumb from '@/Components/Breadcrumb';
import CommoditySlider from '@/Components/CommoditySlider';
import Guest from '@/Layouts/GuestLayout';
import { Commodity } from '@/types';
import { handleWhatsappButton } from '@/utils';
import { BsFileExcel, BsWhatsapp } from 'react-icons/bs';
import { FaFileExcel, FaFilePdf } from 'react-icons/fa';

type Props = {
    commodity: Commodity
}

const CommodityDetail = ({ commodity: { name, brand, model, media, description } }: Props) => {
    return (
        <Guest title={name}>
            <Breadcrumb title={name} imagePath='banner3.webp' />
            <div className='container py-12'>
                <div className='flex flex-wrap'>
                    <div className='w-full h-full lg:w-2/5'>
                        {media.length > 0 ? (
                            <CommoditySlider commodityName={name} media={media.filter((x) => x.collection_name === "commodities")} />
                        ) : (
                            <p className="flex items-center justify-center bg-gray-100 size-80">
                                Imagen no disponible
                            </p>
                        )}
                    </div>
                    <div className='relative w-full pt-4 lg:pt-0 lg:pl-4 lg:w-3/5'>
                        <h1 className="mb-2 text-2xl font-bold text-center">
                            {name}
                        </h1>
                        <hr />
                        <ul className='grid items-center justify-center grid-cols-2 gap-4 py-4 text-center grod-cols-2'>
                            <li>
                                <span className='font-bold'>Marca: </span> <span>{brand?.name}</span>
                            </li>
                            <li>
                                <span className='font-bold'>Modelo: </span> <span>{model || 'Sin modelo'}</span>
                            </li>
                        </ul>
                        <div className='pb-4'>
                            <h2 className="mb-2 text-lg font-bold">Manuales</h2>
                            <ul>
                                {media.filter((x) => x.collection_name === "comodity_guides").map((manual) =>
                                    <li key={manual.id}>
                                        <a download={`${manual.name}.pdf`} href={manual.original_url}
                                            className="inline-flex items-center gap-1 text-lg text-secondary-500 hover:border-b border-primary-500 hover:font-bold"
                                            title='Descargar Manual'
                                        >
                                            <FaFilePdf className='text-red-500' />
                                            <span>{manual.name} </span>
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <button className='absolute bottom-0 button-card' onClick={() => handleWhatsappButton({ commodity: name })}>
                            <BsWhatsapp size={22} className='content-center inline-block' /> Consultar ahora
                        </button>
                    </div>
                    {description && <div className='commodity-description' dangerouslySetInnerHTML={{ __html: description }}></div>}
                </div>


            </div>
        </Guest>
    )
}

export default CommodityDetail;
