import Breadcrumb from "@/Components/Breadcrumb";
import Card from "@/Components/Card";
import GuestLayout from "@/Layouts/GuestLayout";
import { TutorialCategory } from "@/types";

type Props = {
    categories: TutorialCategory[];
};

function Tutorials({ categories }: Props) {
    return (
        <>
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
        </>
    );
}

Tutorials.layout = (page: JSX.Element) => (
    <GuestLayout children={page} title="Tutoriales" />
);

export default Tutorials;
