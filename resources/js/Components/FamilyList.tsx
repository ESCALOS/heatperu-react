import { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';
import Card from './Card';

const FamilyList = () => {
    const { familyList } = usePage<PageProps>().props;

    return (
        <div className='container py-12'>
            <div className="flex flex-wrap justify-center gap-6">
                {familyList.map(({ id, name, slug, media }) => {
                    const link = `/${slug}`;
                    return (
                        <Card
                            key={id}
                            title={name}
                            imgPath={media[0]?.original_url}
                            link={link}
                        >
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default FamilyList;
