import { Link } from "@inertiajs/react";

export default function ApplicationLogo() {
    return (
        <div>
            <Link href='/' className="flex justify-center">
                <img style={{ height: '120px' }} src="/logoheat.png" alt="Logo Heat Factory" />
            </Link>
        </div>
    );
}
