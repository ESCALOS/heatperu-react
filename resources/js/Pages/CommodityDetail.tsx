import Breadcrumb from '@/Components/Breadcrumb';
import CommoditySlider from '@/Components/CommoditySlider';
import { StreamlineConvertPdf2 } from '@/Components/Icons';
import Guest from '@/Layouts/GuestLayout';
import { Brand, Commodity, Media } from '@/types';
import { handleWhatsappButton } from '@/utils';
import { BiCheckCircle, BiXCircle } from 'react-icons/bi';
import { BsFillFileEarmarkPdfFill, BsWhatsapp } from 'react-icons/bs';
import { FaFilePdf } from 'react-icons/fa';

type Props = {
    commodity: Commodity
}

function CommodityData({ name, brand, model, sku, available }: { name: string, brand?: Brand, model?: string, sku: string, available: boolean }) {
    return (
        <div className='flex flex-col justify-center lg:pl-4 lg:w-3/5'>
            <h1 className="pb-2 text-2xl font-bold border-b border-gray-200">
                {name}
            </h1>
            <ul className='flex flex-col justify-center grid-cols-2 gap-4 py-4 grod-cols-2'>
                <li>
                    <span className='font-bold'>Marca: </span> <span>{brand?.name}</span>
                </li>
                <li>
                    <p><span className='font-bold'>Modelo: </span> {model || 'Sin modelo'}</p>
                </li>
                <li>
                    <button className='px-4 py-2 text-white rounded-md bg-primary-500 hover:bg-primary-600' onClick={() => handleWhatsappButton({ commodity: name })}>
                        <BsWhatsapp size={22} className='content-center inline-block' /> Consultar ahora
                    </button></li>
                <li className='flex items-center gap-4 divide-x'>
                    <p><span className='font-bold'>SKU: </span> {sku}</p>
                    <p className='flex items-center justify-center gap-1 pl-4 font-bold'>
                        <span className='font-bold'>Stock: </span>
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
                    </p>
                </li>
            </ul>
        </div>
    )
}

function ManualSection({ media }: { media: Media[] }) {
    return (
        <div className='py-4 my-4 border-gray-200 border-y'>
            <h2 className="mb-4 text-xl font-bold">Manuales</h2>
            <ul className='grid grid-cols-1 gap-2 lg:grid-cols-2'>
                {media.filter((x) => x.collection_name === "comodity_guides").map((manual) =>
                    <li key={manual.id}>
                        <a download={`${manual.name}.pdf`} href={manual.original_url}
                            className="inline-flex items-center gap-1 text-lg text-secondary-500 hover:border-b border-primary-500 hover:font-bold"
                            title='Descargar Manual'
                        >
                            <StreamlineConvertPdf2 className='text-primary-500' fontSize={17} />
                            <span>{manual.name} </span>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}

const CommodityDetail = ({ commodity: { sku, name, brand, model, media, description, available } }: Props) => {
    return (
        <Guest title={name}>
            <Breadcrumb title={name} imagePath='banner3.webp' />
            <div className='container py-12'>
                <div className='flex flex-wrap'>
                    <div className='w-full h-52 lg:w-2/5'>
                        {media.length > 0 ? (
                            <CommoditySlider commodityName={name} media={media.filter((x) => x.collection_name === "commodities")} />
                        ) : (
                            <p className="flex items-center justify-center bg-gray-100 size-80">
                                Imagen no disponible
                            </p>
                        )}
                    </div>
                    <CommodityData name={name} sku={sku} brand={brand} model={model} available={available} />
                </div>
                <ManualSection media={media} />
                {description && <div className='commodity-description' dangerouslySetInnerHTML={{ __html: description }}></div>}
            </div>
        </Guest>
    )
}

export default CommodityDetail;
