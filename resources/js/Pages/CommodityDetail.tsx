import Breadcrumb from '@/Components/Breadcrumb';
import Guest from '@/Layouts/GuestLayout';
import { Commodity } from '@/types'

type Props = {
    commodity: Commodity
}

const CommodityDetail = ({ commodity: { name, media, description } }: Props) => {
    return (
        <Guest title={name}>
            <Breadcrumb title={name} />
            <div className='container py-12'>
                <h1 className="mb-8 text-2xl font-bold text-center">
                    {name}
                </h1>
                <div className="flex flex-col items-center gap-6">
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
                    <p className="text-center">
                        {description || 'No description available'}
                    </p>
                </div>
            </div>
        </Guest>
    )
}

export default CommodityDetail;
