import { Link } from "@inertiajs/react";

export default function ApplicationLogo() {
    return (
        <div className='inline-flex gap-2'>
            <h1 className='text-2xl font-black'>
                <Link href='/'>
                    <span className='text-4xl text-orange-400'>H</span>EAT
                    &nbsp;
                    <span className='text-4xl text-orange-400'>P</span>ERÚ
                </Link>
            </h1>
        </div>
    );
}
