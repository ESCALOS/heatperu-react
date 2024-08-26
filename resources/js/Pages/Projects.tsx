import Breadcrumb from "@/Components/Breadcrumb"
import GuestLayout from "@/Layouts/GuestLayout"

type Props = {}

function Projects({ }: Props) {
    return (
        <div>
            <Breadcrumb title="Proyectos" />
        </div>
    )
}

Projects.layout = (page: JSX.Element) => <GuestLayout children={page} title="Proyectos" />

export default Projects
