import { PageProps } from '@/types'
import { usePage } from '@inertiajs/react'
import { BsWhatsapp } from 'react-icons/bs'


const FamilyList = () => {
    const { familyList } = usePage<PageProps>().props;
    return (
        <div className='container py-12'>
            <div className="flex flex-wrap justify-center gap-6">
                {familyList.map((family) => (
                    <div
                        key={family.id}
                        className="flex flex-col items-center gap-4 p-4 text-center border"
                    >
                        <h2 className="font-semibold text-md">{family.name}</h2>
                        {family.media.length > 0 ? (
                            <img
                                src={family.media[0].original_url}
                                alt={family.name}
                                className="object-cover w-64 h-64 rounded-lg"
                            />
                        ) : (
                            <p className="flex items-center justify-center w-64 h-64">
                                No image available
                            </p>
                        )}
                        <button className='w-full px-4 py-2 font-bold text-white transition-colors rounded-md bg-secondary-500 hover:bg-secondary-400'>
                            <BsWhatsapp size={22} className='content-center inline-block' /> Consultar ahora
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FamilyList
