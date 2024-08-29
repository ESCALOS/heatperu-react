import Breadcrumb from '@/Components/Breadcrumb';
import Card from '@/Components/Card';
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
            <Breadcrumb title={family.name} imagePath='banner3.webp' />
            <div className='container py-12'>
                <h1 className="mb-8 text-3xl font-bold text-center">
                    <span className='capitalize'>{family.name}</span>
                </h1>
                <div className="flex flex-wrap justify-center gap-6">
                    {categories.map(({ id, name, slug, media }) => {
                        return (
                            <Card
                                key={id}
                                title={name}
                                imgPath={media[0]?.original_url}
                                footer={
                                    <Link href={`/${family.slug}/${slug}`} className='button-card'>
                                        Ver más
                                    </Link>
                                } />

                        )
                    })}
                </div>
            </div>
        </Guest>
    )
}

export default CategoryList;
