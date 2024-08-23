import { Link } from "@inertiajs/react";

export default function ApplicationLogo() {
    return (
        <div className='inline-flex gap-2'>
            <Link href='/'>
                <img style={{ height: '120px' }} src="/logoheat.png" alt="Logo Heat Factory" />
            </Link>
        </div>
    );
}
