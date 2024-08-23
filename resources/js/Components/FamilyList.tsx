import { PageProps } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import Card from './Card';

const FamilyList = () => {
    const { familyList } = usePage<PageProps>().props;
    const sortedFamilyList = familyList.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className='container py-12'>
            <div className="flex flex-wrap justify-center gap-6">
                {sortedFamilyList.map(({ id, name, slug, media }) => {
                    return (
                        <Card
                            key={id}
                            title={name}
                            imgPath={media[0]?.original_url}
                            footer={
                                <Link href={`/${slug}`} className=' button-card'>Ver más</Link>
                            }>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default FamilyList;
