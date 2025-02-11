import Breadcrumb from "@/Components/Breadcrumb";
import Card from "@/Components/Card";
import GuestLayout from "@/Layouts/GuestLayout";
import { TutorialCategory } from "@/types";

type Props = {
    categories: TutorialCategory[];
};

function Tutorials({ categories }: Props) {
    return (
        <GuestLayout title="Tutoriales">
            <Breadcrumb title="Tutoriales" imagePath="banner3.webp" />
            <div className="container py-12">
                <div className="flex flex-wrap justify-center gap-6">
                    {categories.map(({ id, name, slug, media }) => {
                        const link = `/tutoriales/${slug}`;
                        return (
                            <Card
                                key={id}
                                title={name}
                                imgPath={media[0]?.original_url}
                                link={link}
                            />
                        );
                    })}
                </div>
            </div>
        </GuestLayout>
    );
}

export default Tutorials;
