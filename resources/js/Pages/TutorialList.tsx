import Breadcrumb from "@/Components/Breadcrumb";
import GuestLayout from "@/Layouts/GuestLayout";
import { Category, Tutorial } from "@/types";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type Props = {
    category: Category;
    tutorials: Tutorial[];
};

function TutorialList({ category, tutorials }: Props) {
    return (
        <GuestLayout title="Tutoriales">
            <Breadcrumb title={category.name} imagePath="banner1.webp" />
            <div className="container px-4 py-12 mx-auto">
                <div className="flex flex-wrap justify-center gap-4">
                    {tutorials.map(
                        ({ id, name, subtitle, description, url_video }) => {
                            return (
                                <div key={id} className="w-full">
                                    <div className="p-8 bg-white rounded-lg shadow-md text-left">
                                        <h2 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-black uppercase text-primary-500">
                                            {name}
                                        </h2>
                                        <p className="text-md md:text-xl text-2xl font-extrabold uppercase">
                                            {subtitle}
                                        </p>
                                        {description && (
                                            <div
                                                className="text-sm md:text-base mt-4 mb-2 tutorial-description space-y-2"
                                                dangerouslySetInnerHTML={{
                                                    __html: description,
                                                }}
                                            ></div>
                                        )}
                                        {url_video && (
                                            <LiteYouTubeEmbed
                                                id={url_video}
                                                title={name}
                                            />
                                        )}
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </GuestLayout>
    );
}

export default TutorialList;
