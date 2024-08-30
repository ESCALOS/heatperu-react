import Breadcrumb from "@/Components/Breadcrumb"
import ContactForm from "@/Components/ContactForm"
import ContactList from "@/Components/ContactList"
import GoogleMap from "@/Components/GoogleMap"
import GuestLayout from "@/Layouts/GuestLayout"

type Props = {}

function Contact({ }: Props) {
    return (
        <>
            <Breadcrumb title="Contáctenos" imagePath="banner2.webp" />
            <section className="p-8 mx-auto bg-white max-w-7xl">
                <div className="p-8 mb-8 rounded-md bg-gray-50">
                    <div className="mb-8 space-y-2 text-center">
                        <h2 className="text-3xl font-medium text-center text-zinc-900">
                            Ponte en contacto con nosotros
                        </h2>
                        <p className="font-light text-zinc-700">
                            Su dirección de correo electrónica no será publicada
                        </p>
                        <p className="text-xs text-primary-500">
                            Los campos obligatorios están marcados*
                        </p>
                    </div>
                    <ContactForm />
                </div>
                <ContactList />
            </section>
            <GoogleMap height="450px" />
        </>
    )
}

Contact.layout = (page: JSX.Element) => <GuestLayout children={page} title="Contáctenos" />

export default Contact
