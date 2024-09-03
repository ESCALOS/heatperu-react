import Breadcrumb from "@/Components/Breadcrumb"
import GuestLayout from "@/Layouts/GuestLayout"
import { Project } from "@/types"
import { dateFormatter } from "@/utils"

type Props = {
    projects: Project[]
}

function Projects({ projects }: Props) {

    return (
        <div>
            <Breadcrumb title="Proyectos" imagePath="banner1.webp" />
            <div className="container px-4 py-12 mx-auto">
                <div className="flex flex-wrap justify-center">
                    {
                        projects.map(({ id, name, description, date, media }) => {
                            const formattedDate = new Date(date);
                            return (
                                <div key={id} className="w-full p-4 md:w-1/2 xl:w- 1/3">
                                    <div className="p-8 bg-white rounded-lg shadow-md">
                                        <h2 className="mb-4 text-lg font-bold">{name}</h2>
                                        <p className="mb-4 text-sm text-gray-600">{description}</p>
                                        <p className="mb-4 text-sm text-gray-600">{dateFormatter.format(formattedDate)}</p>
                                        <img src={media[0].original_url} alt={name} className="object-cover object-top w-full mb-4 rounded-lg h-96" />
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

Projects.layout = (page: JSX.Element) => <GuestLayout children={page} title="Proyectos" />

export default Projects
