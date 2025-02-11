import Breadcrumb from "@/Components/Breadcrumb";
import GuestLayout from "@/Layouts/GuestLayout";
import { Category, Tutorial } from "@/types";
import { dateFormatter } from "@/utils";
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
                        ({ id, name, description, date, url_video }) => {
                            const formattedDate = new Date(date);
                            return (
                                <div key={id} className="w-full">
                                    <div className="p-8 bg-white rounded-lg shadow-md">
                                        <h2 className="mb-2 text-2xl font-bold">
                                            {name}
                                        </h2>
                                        <p className="text-sm font-bold text-primary-500">
                                            {dateFormatter.format(
                                                formattedDate
                                            )}
                                        </p>
                                        {description && (
                                            <div
                                                className="my-2 commodity-description"
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
