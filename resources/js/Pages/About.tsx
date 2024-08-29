import Breadcrumb from "@/Components/Breadcrumb"
import GuestLayout from "@/Layouts/GuestLayout"

type Props = {}

function About({ }: Props) {
    return (
        <div>
            <Breadcrumb title="Nosotros" imagePath="banner1.webp" />
        </div>
    )
}

About.layout = (page: JSX.Element) => <GuestLayout children={page} title="Nosotros" />

export default About
