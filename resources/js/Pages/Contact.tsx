import Breadcrumb from "@/Components/Breadcrumb"
import GuestLayout from "@/Layouts/GuestLayout"

type Props = {}

function Contact({ }: Props) {
    return (
        <div>
            <Breadcrumb title="Contáctenos" backgroundImage="/megumi.jpg" />
        </div>
    )
}

Contact.layout = (page: JSX.Element) => <GuestLayout children={page} title="Contáctenos" />

export default Contact
