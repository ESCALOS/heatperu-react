import Breadcrumb from "@/Components/Breadcrumb";
import PhotoGallery from "@/Components/PhotoGallery";
import GuestLayout from "@/Layouts/GuestLayout";
import { Project } from "@/types";
import { dateFormatter } from "@/utils";

type Props = {
    projects: Project[];
};

function Projects({ projects }: Props) {
    return (
        <GuestLayout title="Proyectos">
            <Breadcrumb title="Proyectos" imagePath="banner1.webp" />
            <div className="container px-4 py-12 mx-auto">
                <div className="flex flex-wrap justify-center gap-4">
                    {projects.map(({ id, name, description, date, media }) => {
                        const formattedDate = new Date(date);
                        return (
                            <div key={id} className="w-full">
                                <div className="p-8 bg-white rounded-lg shadow-md">
                                    <h2 className="mb-2 text-2xl font-bold">
                                        {name}
                                    </h2>
                                    <p className="text-sm font-bold text-primary-500">
                                        {dateFormatter.format(formattedDate)}
                                    </p>
                                    {description && (
                                        <div
                                            className="my-2 commodity-description"
                                            dangerouslySetInnerHTML={{
                                                __html: description,
                                            }}
                                        ></div>
                                    )}
                                    <PhotoGallery title={name} media={media} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </GuestLayout>
    );
}

export default Projects;
