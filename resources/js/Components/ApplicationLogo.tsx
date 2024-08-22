import { Link } from "@inertiajs/react";

export default function ApplicationLogo() {
    return (
        <div className='inline-flex gap-2'>
            <Link href='/'>
                <img src="/logoheat.png" alt="Logo Heat Perú" />
            </Link>
        </div>
    );
}
