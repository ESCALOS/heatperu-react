import Breadcrumb from '@/Components/Breadcrumb';
import Card from '@/Components/Card';
import Guest from '@/Layouts/GuestLayout';
import { Category, Family } from '@/types'

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
                    {categories.sort((a, b) => a.name.localeCompare(b.name)).map(({ id, name, slug, media }) => {
                        const link = `/${family.slug}/${slug}`;
                        return (
                            <Card
                                key={id}
                                title={name}
                                imgPath={media[0]?.original_url}
                                link={link} />
                        )
                    })}
                </div>
            </div>
        </Guest>
    )
}

export default CategoryList;
