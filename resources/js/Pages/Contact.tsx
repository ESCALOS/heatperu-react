import React from 'react'
import GuestLayout from "@/Layouts/GuestLayout"

type Props = {}

function Contact({ }: Props) {
    return (
        <div>Contact</div>
    )
}

Contact.layout = (page: JSX.Element) => <GuestLayout children={page} title="Contáctanos" />

export default Contact
