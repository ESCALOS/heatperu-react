import { PageProps } from '@/types';
import { Link, usePage } from '@inertiajs/react';

const FamilyList = () => {
    const { familyList } = usePage<PageProps>().props;
    const sortedFamilyList = familyList.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className='container py-12'>
            <div className="flex flex-wrap justify-center gap-6">
                {sortedFamilyList.map(({ id, name, slug, media }) => {
                    return (
                        <div
                            key={id}
                            className="flex flex-col items-center gap-4 p-4 text-center border"
                        >
                            <h2 className="font-semibold text-md">{name}</h2>
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
                            <Link
                                href={`/${slug}`}
                                className='w-full px-4 py-2 font-bold text-white transition-colors rounded-md bg-secondary-500 hover:bg-secondary-400'
                            >
                                Ver más
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FamilyList;
