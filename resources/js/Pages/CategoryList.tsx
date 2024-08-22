import Breadcrumb from '@/Components/Breadcrumb';
import Guest from '@/Layouts/GuestLayout';
import { Category, Family, PageProps } from '@/types'
import { Link } from '@inertiajs/react'

type Props = {
    categories: Category[]
    family: Family
}

const CategoryList = ({ categories, family }: Props) => {
    return (
        <Guest title={family.name}>
            <Breadcrumb title={family.name} backgroundImage="/megumi.jpg" />
            <div className='container py-12'>
                <h1 className="mb-8 text-3xl font-bold text-center">
                    <span className='capitalize'>{family.name}</span>
                </h1>
                <div className="flex flex-wrap justify-center gap-6">
                    {categories.map(({ id, name, slug, media }) => {
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
                                <Link href={`/${family.slug}/${slug}`} className='w-full px-4 py-2 font-bold text-white transition-colors rounded-md bg-secondary-500 hover:bg-secondary-400'>
                                    Ver más
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Guest>
    )
}

export default CategoryList;
